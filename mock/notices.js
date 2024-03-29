const getNotices = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'You received 14 new weekly newspapers',
      datetime: '2017-08-09',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: 'Your recommended Quinnie has passed the third round of interviews.',
      datetime: '2017-08-08',
      type: 'notification',
    },
    {
      id: '000000003',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: 'This template can distinguish between multiple notification types',
      datetime: '2017-08-07',
      read: true,
      type: 'notification',
    },
    {
      id: '000000004',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
      title: 'The left icon is used to distinguish between different types',
      datetime: '2017-08-07',
      type: 'notification',
    },
    {
      id: '000000005',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'Do not exceed two lines of content, automatically cut off when exceeded',
      datetime: '2017-08-07',
      type: 'notification',
    },
    {
      id: '000000006',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Qu Lili commented on you',
      description: 'Description information description information description information',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000007',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Zhu is right, I replied to you.\n',
      description: 'This template is used to remind people who have interacted with you.',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000008',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'title',
      description: 'This template is used to remind people who have interacted with you.',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000009',
      title: '任务名称',
      description: '任务需要在 2017-01-12 20:00 前启动',
      extra: '未开始',
      status: 'todo',
      type: 'event',
    },
    {
      id: '000000010',
      title: 'Third-party emergency code change',
      description: 'Guan Lin submitted on 2017-01-06, need to complete the code change task before 2017-01-07',
      extra: 'Immediately expired',
      status: 'urgent',
      type: 'event',
    },
    {
      id: '000000011',
      title: 'Information Security Exam',
      description: 'Assigned to Zhuer to complete the update and release before 2017-01-09',
      extra: 'It has taken 8 days',
      status: 'doing',
      type: 'event',
    },
    {
      id: '000000012',
      title: 'ABCD version release',
      description: 'Guan Lin submitted on 2017-01-06, need to complete the code change task before 2017-01-07',
      extra: 'in progress',
      status: 'processing',
      type: 'event',
    },
  ]);
};

export default {
  'GET /api/notices': getNotices,
};
