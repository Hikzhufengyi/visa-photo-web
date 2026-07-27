# 一次官网内容优化复盘：我怎样让一个小工具页面更容易被理解

最近我给自己的 iPhone 工具 **IDPhoto Pro** 做了一轮官网内容优化。

这个 App 很具体：选择护照照、签证照或 ID 照规格，检查尺寸、背景和脸部位置，再导出电子版或 4x6 打印排版。

这次我没有先去写大量文章，而是先问了一个更基础的问题：

> 用户真正想完成什么任务？

## 1. 用户的问题通常很具体

我整理了几类常见问题：

| 问题 | 背后任务 |
| --- | --- |
| How do I make a US passport photo on iPhone? | 用手机做照片 |
| What size is a Saudi Iqama photo? | 查具体规格 |
| Can I make a 4x6 passport photo print sheet at home? | 自己打印 |
| Does the app process photos locally? | 关心隐私 |

这些问题不是泛泛了解，而是用户马上要完成某个申请、打印或上传动作。

## 2. 先看真实数据

我先看了 Search Console。

网站当前被理解成一个“证件照规格资料库”，这正好贴合产品能力：尺寸、背景、脸部位置和打印排版。

我优先整理了这些方向：

| 方向 | 为什么值得做 |
| --- | --- |
| Saudi Iqama photo | 具体证件场景 |
| UK passport photo size | 有稳定查询 |
| Australia passport photo size | 适合规格说明 |
| UAE / Dubai visa photo | 申请意图明确 |
| 4x6 photo print from iPhone | 对应打印排版功能 |

原则很简单：先优化已经有人在查、并且产品确实能帮上忙的页面。

## 3. 再看哪些页面带来行动

我又看了 Analytics 里的 App Store 点击。

过去 28 天，`app_store_click` 有 16 次：

| 页面 | 点击 |
| --- | ---: |
| `/en` | 6 |
| `/zh` | 5 |
| `/en/print-1x1-photo-size` | 2 |
| `/zh/600x600-passport-photo` | 2 |
| `/en/uscis-photo-requirements` | 1 |

这个结果说明：首页仍然最重要，但规格页也已经开始产生行动。

所以规格页不应该只是资料页，还应该把“怎么做、怎么检查、怎么导出”讲清楚。

## 4. 页面结构的调整

我把部分页面从：

```text
标题 + 规格说明
```

改成：

```text
直接答案
规格表
常见错误
App 如何检查
电子版 / 4x6 导出
FAQ
```

这样用户进入页面后，不需要读很久，就能知道这个页面能不能解决他的任务。

## 5. 表达要准确

证件照场景比较敏感，所以我也顺手调整了一些表达：

| 少用 | 改成 |
| --- | --- |
| 官方生成 | 制作照片文件 |
| 保证通过 | 符合所需尺寸 |
| 认证证件照 | 按公开照片要求检查 |
| 生成护照/签证 | 导出照片文件 |

这类工具网站最重要的是准确，不要把“制作照片文件”说成“生成官方文件”。

## 6. 我的工作流

这次整理后，我把流程固定成这样：

```text
Search Console：看用户在查什么
Analytics：看哪些页面带来行动
选择具体任务
改页面第一屏答案
补规格表和 FAQ
继续观察曝光、排名和点击
```

小工具官网不一定要追很大的词。

更现实的机会，是把一个具体问题回答清楚。

比如：

```text
Can I make a 4x6 passport photo print sheet at home?
```

如果产品刚好解决这个任务，页面就应该直接告诉用户：可以怎么做、要注意什么、最后能导出什么。

这次实践来自 [IDPhoto Pro 官网](https://www.passportidphoto.com/zh)。后面我会继续观察 Search Console 和 App Store 点击数据。
