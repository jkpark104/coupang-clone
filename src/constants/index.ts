const { NEXT_PUBLIC_API_HOST } = process.env

if (!NEXT_PUBLIC_API_HOST) {
  throw new Error('환경변수 NEXT_PUBLIC_API_HOST가 존재하지 않습니다.')
}

export const API_HOST = NEXT_PUBLIC_API_HOST
