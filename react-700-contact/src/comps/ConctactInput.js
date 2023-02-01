const ContactInput = () => {
  return (
    <>
      <label htmlFor="name">이름</label>
      <input id="name" name="c_name" />
      <label htmlFor="tel">연락처</label>
      <input id="tel" name="c_tel" type="number" />
      <label htmlFor="email">이메일</label>
      <input id="email" name="c_email" />
      <label htmlFor="addr">주소</label>
      <input id="addr" name="c_addr" />
      <button type="button">등록</button>
    </>
  );
};
