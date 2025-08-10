
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
    const newUser: Omit<User, 'id'> = await request.json();
    const { db } = await connectToDatabase();
    
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
