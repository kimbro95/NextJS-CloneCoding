import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req:NextRequest, ev:NextFetchEvent){
    // next.js가 req에 useragent = ua를 통해 봇인지 구분해준다.
    if(req.ua?.isBot) {
        return new Response("I think u r a bot !!! \nIf not, sorry :( ", { status : 403 });
    }
    // 미들웨어를 통한 인증처리 세션에 데이터가 없을 경우 /enter 페이지로
    if(!req.url.includes("/api")){
        if(!req.url.includes("/enter") && !req.cookies.carrotsession){
            return NextResponse.redirect(new URL('/enter', req.url))
        }
    }
    // geo를 통해 사용자의 위치정보를 알 수 있음
    //console.log(req.geo)
}