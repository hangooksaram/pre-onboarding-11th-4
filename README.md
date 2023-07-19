## Getting Started

```
npm install && npm run start
```
## 시연
![cache final](https://github.com/hangooksaram/pre-onboarding-11th-4/assets/55138387/e463a3b2-6d6f-4c39-af83-cd89a7f85f13)


## Built with

- Typescript
- React
- emotion/styled

## Features

### API 호출 별 로컬 캐싱

- API 호출 함수 를 매개변수로 하여 클로저를 반환하는 Wrapper 함수 (이하, `cacheWrapper`) 를 생성하여, 호출이 일어날 때 마다 Wrapper 함수 가 실행되도록 하였습니다.
- `cacheWrapper` 에는 `cache` 라는 지역 변수가 있습니다. `cache` 는 `검색 쿼리` 를 key 로 가지는 `객체` 들이 저장됩니다.
- 각 객체 에는 API 응답 데이터인 `data` 와 cache 에 저장된 시간인 `storedTime` 이 값으로 들어있습니다.
- 프로세스는 다음과 같습니다.
    - 만일 검색 쿼리가 Map 의 key 중 에 존재 한다면, `cache` 에 저장되 어 있는 data 을 반환 합니다.
        - (현재시간 - storedTime) 이 만료 시간보다 크다면, 즉 만료되었다면, cache 에서 해당 key 를 delete 합니다.
    - 존재하지 않는 다면, cache 에 새로운 검색 쿼리를 key 로 가지는 객체 를 set 합니다.

### 입력마다 API 호출하지 않도록 API 호출 횟수 줄이기

- 디바운싱 기법을 활용하여 커스텀 훅을 만들었습니다. 해당 커스텀 훅은 `value` (검색 쿼리) 와 `delay` (지연 시간) 을 매개변수로 받습니다.
- debouncedValue 라는 상태값이, useEffect 내에서 setTimeout 이 작동하여 delay 만큼의 시간 후 에 value 로 할당 되게 됩니다.
- cleanup 함수 에서 timer 를 clearTimeout 으로 취소하게 됩니다.
- 결국 delay 만큼의 시간이 지나기 이전에 입력이 발생하면, 이전 타이머는 cleanup 함수에서 취소되고 새로운 커스텀 훅이 실행되며 새로운 timer 를 설정하게 됩니다.

### 키보드만으로 추천 검색어들로 이동 가능하도록 하기

- 이동할 요소인 target 이라는 상태를 만들었습니다.
    - 화살표 위키를 누르면, target - 1,
    - 화살표 아래키를 누르면, target + 1
- 리스트 아이템 의 index(배열 순서) 가 target 과 같다면
    - 리스트 아이템의 배경색이 바뀌게 됩니다.
- 리스트 에 스크롤이 생길 시, 리스트 아이템이 추적되지 않는 이슈가 있어 각 리스트 아이템에 ref 배열의 요소를 부착했습니다.
    - ref 에 scrollIntoView 하는 `이벤트` 를 등록하고, cleanup 함수에서 제거하도록 했습니다.
    - 한 리스트에서 최대로 보여지는 개수인 8을 넘어갔을 때, scrollIntoView 함수가 트리거되어, 스크롤이 넘어가도 현재 target 을 추적할 수 있게 됩니다.
