import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.end("Hello " + request.query.name);
});

app.get("/search/:keyword", (request, response) => {
  const { keyword } = request.params;
  response.end(keyword);
});

app.listen(3000, () => {
  console.log("서버가 정상적으로 실행되었어요!");
});
