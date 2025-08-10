
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import type { User } from '@/lib/user-data';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const users = await db.collection<User>('users').find({}).toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, role, status } = await request.json();
    const { db } = await connectToDatabase();
    
    // In a real app, you would hash the password here before saving
    // For now, we are omitting it from the database record for security
    const newUser: Omit<User, 'id' | 'lastLogin'> = {
        name,
        email,
        role,
        status,
    };

    const result = await db.collection('users').insertOne({
        ...newUser,
        id: crypto.randomUUID(), // Generate a random ID
        lastLogin: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'User created', userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Failed to create user:', error);
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }
}
