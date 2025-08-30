import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    systems: {
      api: {
        alive: true,
        status: 'excelent',
      },
      frontend: {
        alive: true,
        status: 'good',
      },
      jobs: {
        alive: false,
        status: 'comming soon',
      },
    },
  })
}
