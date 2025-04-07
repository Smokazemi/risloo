import { NextResponse } from 'next/server';
import data from '../../../../public/data/data.json';
import { elementPagePage } from '@/data/config';


export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const index = searchParams.get('index');
        const fromStart = searchParams.get('fromStart');

        const from = index ? data.findIndex(x => x.id === index) + 1 : 0
        const result = fromStart ?
            data.slice(0, from + elementPagePage) :
            data.slice(from, from + elementPagePage)

        return NextResponse.json({
            centers: result,
            pagination: {
                prevIndex: data[from - 1]?.id,
                nextIndex: data[from + elementPagePage]?.id,
                totalItems: data.length,
                itemsPerPage: elementPagePage
            }
        });
    } catch (error: unknown) {
        console.error('Centers API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch centers' },
            { status: 500 }
        );
    }
}