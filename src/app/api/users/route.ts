
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import type { User } from '@/lib/user-data';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const users = await db.collection('users').find({}).toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, password, role, status } = await request.json();
    const { db } = await connectToDatabase();
    
    // In a real app, you would hash the password here before saving
    // For now, we are just receiving it but not storing it directly
    const newUser: Omit<User, 'id' | '_id' | 'lastLogin'> = {
        name,
        email,
        role,
        status,
    };

    const result = await db.collection('users').insertOne({
        ...newUser,
        id: new ObjectId().toHexString(), // Generate a new ID
        lastLogin: new Date().toISOString(),
        // password field is omitted for security
    });

    return NextResponse.json({ message: 'User created', userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Failed to create user:', error);
    // Check for duplicate email error
    if (error instanceof Error && 'code' in error && error.code === 11000) {
        return NextResponse.json({ message: 'User with this email already exists.' }, { status: 409 });
    }
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }
}
