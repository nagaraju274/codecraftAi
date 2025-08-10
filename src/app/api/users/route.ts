
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
    
    if (!email || !name) {
        return NextResponse.json({ message: 'Missing required fields: name and email' }, { status: 400 });
    }
    
    const { db } = await connectToDatabase();
    const usersCollection = db.collection<User>('users');

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      // If user exists, return their data instead of an error.
      // This handles both new sign-ups and logins for existing users via OAuth.
      return NextResponse.json(existingUser, { status: 200 });
    }
    
    const newUser: Omit<User, '_id'> = {
        id: new ObjectId().toHexString(), // Generate a new string ID
        name,
        email,
        role: role || 'user',
        status: status || 'active',
        lastLogin: new Date().toISOString(),
    };

    const result = await usersCollection.insertOne(newUser as User);
    
    const createdUser = await usersCollection.findOne({ _id: result.insertedId });

    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    console.error('Failed to create user:', error);
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }
}
