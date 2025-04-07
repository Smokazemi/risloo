import { baseUrl } from "@/data/config";
import { Center, ServiceResponseList } from "@/types";

export async function getCenters(index?: string, fromStart?: boolean): Promise<ServiceResponseList<Center>> {
    try {
        const searchParams = new URLSearchParams();
        if (index) {
            searchParams.set('index', index);
        }
        if (fromStart) {
            searchParams.set('fromStart', fromStart.toString());
        }
        const response = await fetch(`${baseUrl}/api/centers` + '?' + searchParams.toString(),);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { centers, pagination } = await response.json();

        return {
            data: centers,
            pagination,
            status: 200,
            message: 'OK'
        };
    }
    catch (e: unknown) {
        return {
            error: e instanceof Error ? e.message : String(e),
            status: (e as { status?: number })?.status || 500,
            message: 'Internal Server Error'
        };
    }
}