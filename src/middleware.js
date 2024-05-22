export async function middleware(request) {
  console.log(await request.json())

  if (['/api/signup/', '/api/login/'].includes(request.nextUrl.pathname)) {
    // nothing
  } else {
    console.log(await request.json())
    console.log(await request.json())

    // const requestHeaders = new Headers(request.headers)
    // if (!requestHeaders.get('Authorization')) {
    //   return Response.json({ success: false, message: 'authentication failed' }, { status: 401 })
    // }
    //   get auth token from header
    //   requestHeaders.get('Authorization')

    // decrypt token using decrpyt function in utils and set token using following line in header
    // requestHeaders.set('x-hello-from-middleware1', 'hello')
  }
}

export const config = {
  matcher: '/api/:path*'
}
