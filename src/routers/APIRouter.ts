import { NextFunction, Request, Response, Router } from 'express';
import AuthController from '../controller/AuthController';
import { ILoginData, ILoginResult, IClearResult } from '../interface/Account';
import { IResponse, ERROR_CODE } from '../interface/define';

export class APIRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private async routes(): Promise<void> {
        this.router.get('/articles', this.articles);
    }

    private async articles(request: Request, response: Response, next: NextFunction): Promise<void> {
        const responseData: IResponse = { success: ERROR_CODE.SUCCESS, data: {} };
        
        responseData.data = {
            articles: [
                {
                    title: 'NAVER Tech Talk: Android 밋업(2019년 7월)',
                    linl: 'https://d2.naver.com/helloworld/7663642',
                    contents: 'NAVER에서는 다양한 기술에 대한 테크톡을 주기적으로 진행하고 있는데요. 2019년 7월에 진행한 사내 Android 밋업 중 발표자의 공개 동의를 얻은 발표 영상을 공유합니다. Navigation 으로 안되는 것 발표 영상: https://tv.naver.com/v/9910794 발표자: 안성용 (NAVER) 발표일: 2019.7. AndroidX Jetpack Navigation을 Production에 사용하면서 마주했던 이슈들과 이를 어떻게 해결...',
                    imgSrc: 'https://d2.naver.com/content/images/2019/09/----Meetup76_20190730_--------_--------mp4_20190919_155751-015.jpg',
                    date: '2019.09.19'
                }, {
                    title: '2019 NAVER CAMPUS HACKDAY WINTER',
                    linl: 'https://d2.naver.com/news/4972264',
                    contents: '네이버 개발자와 함께하는 대학생 해커톤! 2019 NAVER CAMPUS HACKDAY WINTER 열립니다. 어느덧 일곱 번째를 맞이한 네이버 캠퍼스 핵데이! 가장 많은 지원 경로가 주변의 친구들과 선배...',
                    imgSrc: 'https://d2.naver.com/content/images/2019/09/-----------2019-09-11------3-47-59.png',
                    date: '2019.09.11'
                }, {
                    title: '글로벌 네트워크 에뮬레이터 prism_pacman 소개',
                    linl: 'https://d2.naver.com/helloworld/7847943',
                    contents: '해외 서비스에서 현지 네트워크 상황을 고려하여 최적화된 서비스를 제작하고 튜닝하는 일은 쉽지 않습니다. 전송 속도가 낮아서 서비스 전체적인 응답 속도가 떨어져 답답하기도 하고, 국내 서비스...',
                    imgSrc: 'https://d2.naver.com/content/images/2019/08/14-1.png',
                    date: '2019.08.28'
                }, {
                    title: 'NAVER Tech Talk: iOS 밋업(2019년 6월)',
                    linl: 'https://d2.naver.com/news/0427227',
                    contents: 'NAVER에서는 다양한 기술에 대한 테크톡을 주기적으로 진행하고 있는데요. 2019년 6월에 진행한 사내 iOS 밋업 중 발표자의 공개 동의를 얻은 발표 영상을 공유합니다. CocoaPods 제거를 통한 블로그 빌드 속도 개선 발표 영상: https://tv.naver.com/v/9501931 발표자: 최유태 (NAVER) 발표일: 2019.6. Multiplatform Architecture RIBs in Swift 발표 영상: https://tv.na...',
                    imgSrc: 'https://d2.naver.com/content/images/2019/08/----Meetup73_20190627_iOS---_--------mp4_20190814_151136-858.jpg',
                    date: '2019.08.14'
                }, {
                    title: '2019년과 이후 JavaScript의 동향 - 라이브러리와 프레임워크 2',
                    link: 'https://d2.naver.com/helloworld/2108442',
                    contents: '웹 컴포넌트(Web Component)가 프런트엔드 영역의 개발을 컴포넌트 기반 개발로 전환할 수 있을 것이리라 기대했지만 오랜 시간 동안 웹 컴포넌트는 기대에 부응하지 못하고 있습니다. 정적 타입',
                    imgSrc: 'https://d2.naver.com/content/images/2019/08/helloworld-201907-jaesung-park_3-03-1.png',
                    date: '2019.08.09'
                }, {
                    title: '데이터 품질에 관한 5개 체크포인트',
                    linl: 'https://d2.naver.com/helloworld/1179024',
                    contents: '"코드 품질"은 소프트웨어 개발자에게 직업적 사명의 문제인지라, 이것의 중요성에 대해서는 따로 강조할 필요가 없습니다. "데이터 품질"이란 말은 이에 비하면 다소 모호하고 생소한 개념입니다.',
                    imgSrc: 'https://d2.naver.com/content/images/2019/08/f2-1.png',
                    date: '2019.08.06'
                }, {
                    title: '2019년과 이후 JavaScript의 동향 - 라이브러리와 프레임워크 1',
                    linl: 'https://d2.naver.com/helloworld/0145894',
                    contents: '어느 순간부터 프레임워크의 홍수 속에 있는 듯합니다. 각 프레임워크가 내세우는 철학과 다양한 장점에 촉각을 세우고, 어떤 것을 선택해야 할지 그리고 선택한 프레임워크에는 어떤 라이브러리가 있는지, 다시 그 라이브러리에서 어떤 것이 제일 나은지 고민하는 것이 매우 일상적인 일이 되어 버린 것 같습니다. 이러한 선택의 어려움을 해결하는 데 도움을 주기 위해 현실 세계(real world)의 애플리케이션을 다양한 프레임워크의 조합으로 테스트해 볼 수 있는 Re..',
                    imgSrc: 'https://d2.naver.com/content/images/2019/08/helloworld-201906-jaesung-park_3-03-1.jpg',
                    date: '2019.08.02'
                }, {
                    title: 'Docker 기반 분산 트랜스코더 개발',
                    linl: 'https://d2.naver.com/helloworld/3661677',
                    contents: 'VOD(video on demand, 주문형 비디오) 서비스는 다양한 사용자 환경에서 일관된 품질로 영상이 재생될 수 있도록 콘텐츠를 준비해야 합니다. 서비스에 업로드된 원본 영상은 트랜스코딩 과정을 거쳐 원본 영상과 내용은 동일하지만 VOD에 적합하도록 컨테이너 포맷, 해상도, 코덱, 비트레이트 등이 변경된 새로운 영상으로 만들어집니다. 현재 네이버에서 트랜스코딩에 사용하는 서버에서 1시간 길이의 1080p 해상도의 영상을 동일한 1080p 해상도의 영...',
                    imgSrc: 'https://d2.naver.com/content/images/2019/07/helloworld-201905-jaehwoon-kim-04-1.png',
                    date: '2019.08.01'
                }
            ]
        }

        response.send(responseData);
    }
}