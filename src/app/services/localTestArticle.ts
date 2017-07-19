import { Article } from "../models/article";
import { Article_preview } from "../models/article_preview";

const all_article: Article[] = [
  {
    id: 1,
    title: "我是第一篇文章辣",
    time: "2017-06-18",
    author: "wueiz",
    descript: "我是第一篇文章的描述辣",
    content: "我是第一篇文章的内容辣"
  },{
    id: 2,
    title: "我是第er篇文章辣",
    time: "2017-06-12",
    author: "wueiz",
    descript: "我是第ee篇文章的描述辣",
    content: "我是第er篇文章的内容辣"
  },{
    id: 3,
    title: "我是第3篇文章辣",
    time: "2017-06-03",
    author: "wueiz",
    descript: "我是第33篇文章的描述辣",
    content: "我是第3篇文章的内容辣"
  },{
    id: 4,
    title: "我是第4篇文章辣",
    time: "2017-06-04",
    author: "wueiz",
    descript: "我是第4篇文章的描述辣",
    content: "我是第44篇文章的内容辣"
  }
];

export const all_article_preview: Article_preview[] = [
  {
    id: 1,
    title: "我是第一篇文章辣",
    time: "2017-06-18",
    author: "wueiz",
    descript: "我是第一篇文章的描述辣"
    },{
    id: 2,
    title: "我是第er篇文章辣",
    time: "2017-06-12",
    author: "wueiz",
    descript: "我是第ee篇文章的描述辣"
    },{
    id: 3,
    title: "我是第3篇文章辣",
    time: "2017-06-03",
    author: "wueiz",
    descript: "我是第33篇文章的描述辣"
    },{
    id: 4,
    title: "我是第4篇文章辣",
    time: "2017-06-04",
    author: "wueiz",
    descript: "我是第4篇文章的描述辣"
  }
];

export const recommend: Article_preview[] = [
  {
  id: 22,
  title: "我是第e22篇文章辣",
  time: "2017-06-22",
  author: "wueiz",
  descript: "我是第ee篇文章的描述辣"
  },{
  id: 33,
  title: "我是第33篇文章辣",
  time: "2017-06-33",
  author: "wueiz",
  descript: "我是第33篇文章的描述辣"
  }
]


export class Article_getter{
  get(id: number): Article{
    return all_article[id-1];
  }
}
