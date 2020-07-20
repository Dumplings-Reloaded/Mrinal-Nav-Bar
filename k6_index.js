import http from "k6/http";
import { sleep } from "k6";

export let options = {
    rps: 10000,
    stages: [
    {duration: '30s', target: 1},
    {duration: '30s', target: 10},
    {duration: '30s', target: 100},
    {duration: '30s', target: 1000}
  ]
};

export default function () {
  const url = 'http://localhost:3500/other';


  let responses = http.batch([
    // [
    //   'GET',
    //   `${url}/search`,
    //    null,
    //    null
    // ]
    //,
    [
      'POST',
      `${url}/post`,
      {"name": 'k6', "price": 45, "img": 'shorturl.at/dqAJ3'},
      null
    ]
  ]);
  sleep(1);
}