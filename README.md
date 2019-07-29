# GameBack
Game Back-End Practice.

참조 문서

Typescript / Express : https://novemberde.github.io/node/2017/10/22/Express-Typescript.html
https://kamang-it.tistory.com/entry/NodeJSSocketIOSocketIO-%EB%A9%80%ED%8B%B0-%ED%86%B5%EC%8B%A0-%EB%8B%A4%EC%A4%91-%ED%86%B5%EC%8B%A0-serverclient-2
Typescript / Express : https://gyuha.tistory.com/516 : https://github.com/gyuha/express-typescript-webpack

공부 해보자
Nginx : https://m.blog.naver.com/jhc9639/220967352282 https://junojunho.com/front-end/aws-nginx-express => ? 서버 앞단에 두어서 한번 걸러주는 필터와 같은 것으로 보이는데.. 왜 사용하는가? 

무엇이 좋아지는가?
Apach? Node? 싱글 스레드 멀티 스레드, 비 동기와 동기, 개발 속도? 무엇이 왜 나에게 맞는가? 선택 이유.
Docker? Docker핫했는데 Docker란 무엇인가? 왜 쓰는가? => http://labs.brandi.co.kr/2018/05/25/kangww.html
PM2 : https://cheese10yun.github.io/PM2/

구상한 Back단. Network -> Web Server(Nginx) -> App Server(Node)(Docker) ->
DB 서버는 따로둔다.