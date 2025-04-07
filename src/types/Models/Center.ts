
export interface Center {
  id: string
  detail: {
    title: string
    description: string | null
    address: string | null
    avatar: Array<{
      url: string
      mode: string
    }> | null
    phone_numbers: string[] | null
  }
  manager: {
    name: string
    avatar: Array<{
      url: string
      mode: string
    }> | null
  }
}

export interface CentersPageProps {
  centers: Center[]
}