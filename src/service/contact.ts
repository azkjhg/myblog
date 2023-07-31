import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  //우리 api 라우터에 이메일 전송을 위한 요청을 보냄
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패함"); //데이터 메세지가 없다면
  }
  return data;
}
