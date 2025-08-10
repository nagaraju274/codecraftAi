
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
    const body = await request.json();
    const { name, email, role, status } = body;
    const { db } = await connectToDatabase();

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User with this email already exists.' }, { status: 409 });
    }
    
    const newUser: Omit<User, 'id' | '_id' | 'lastLogin'> = {
        name,
        email,
        role: role || 'user',
        status: status || 'active',
    };

    const result = await db.collection('users').insertOne({
        ...newUser,
        id: new ObjectId().toHexString(), // Generate a new ID
        lastLogin: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'User created', userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Failed to create user:', error);
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }
}

