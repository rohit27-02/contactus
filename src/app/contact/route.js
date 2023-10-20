import { NextResponse } from "next/server";
export async function POST(req) {
    if (req.method === 'POST') {
      try {
        const response = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        if (response.ok) {
          return NextResponse.json({ status:200 , message: 'Email sent successfully' });
        } else {
            return NextResponse.json({status:500, error: 'Something went wrong, please try again later' });
        }
      } catch (error) {
        return NextResponse.json({status:500, error: 'Something went wrong, please try again later' });
      }
    } else {
        return NextResponse.json({status:405, error: 'Not allowed' });
    }
  }
  