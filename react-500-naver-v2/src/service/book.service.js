// server 에서 데이터를 가져올 때 사용하는 코드 모음
// mybook 데이터

export const getMyBooks = async (username) => {
  try {
    const response = await fetch(`/api/book/my/${username}`);
    const result = await response.json();
    return result;
  } catch (err) {
    return null;
  }
};

export const addMyBooks = async (book, username) => {
  const fetchOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ book, username }),
  };
  try {
    const response = await fetch("/api/book/insert", fetchOption);
    /**
     * json()
     * fetch 에 내장된 함수
     * 수신한 Http 프로토콜의 response 객체에서
     * json type 의 데이터만 getter 하여 result 변수에 담기
     * 내부에서 자동으로 parse 하므로 JSON.parse() 하지 않아도 된다.
     */
    const result = await response.json();
    alert(result.MESSAGE);
  } catch (err) {
    return null;
  }

  /**
   * Vanlia JS 엔진에는 고유의 내장 객체가 있다.
   * 그 중 JSON 객체 : json type 의 데이터를 변환하거나 적절하게 가공하는 용도
   *
   * 아래 선언은 json type 으로 보이지만 String 데이터이다(backtick 으로 묶었기 때문).
   * const jsonString = `
   * {
   * "name":"홍길동",
   * "age":33
   * }
   * `
   *
   * jsonString.name 을 참조하면 오류가 난다.
   *
   * 이 문자열을 실제 JSON 데이터로 변환하려면
   * JSON 내장 객체에 미리 준비된 parse() 함수를 사용하여 JSON 객체로 변환해주어야 한다.
   *    const jsonObj = JSON.parse(jsonString)
   * 이제 비로소 jsonObj.name 을 참조할 수 있다. 결과로 홍길동 값이 console 에 출력된다.
   *
   * internet TCP/IP 프로토콜 중 http(s) 프로토콜을 사용하여 데이터를 주고받는데
   * 여기에서 주고받을 수 있는 데이터는 모두 char 형식의 집합(문자들 != 문자열)이다.
   *
   * 애플리케이션 내에서 어떤 type 의 데이터가 만들어지더라도 이 데이터를 http 프로토콜에 실어서 보내려면
   * 반드시 char 의 집합으로 만들어야 한다.
   * 이것을 네트워크 이론에서 Serialize 라고 한다.
   *
   * Error 객체를 사용하거나, fetch 를 사용하여 데이터를 body 에 담을 때 JSON.stringify 함수를 사용하는 이유는
   * JSON 객체를 문자의 집합으로 변환해야 하기 때문이다.
   */
};
