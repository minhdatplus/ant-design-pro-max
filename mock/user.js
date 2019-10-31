function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
} // The code will be compatible with the local service mock and the static data of the deployment site.

export default {
  // Support values are Object and Array
  'GET /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: 'Haina Baichuan, there is Rong Nai',
    title: 'Interaction expert',
    group: 'Ant gold service - a certain business group - a certain platform department - a certain technical department - UED',
    tags: [
      {
        key: '0',
        label: 'very thought',
      },
      {
        key: '1',
        label: 'focus on design',
      },
      {
        key: '2',
        label: 'Spicy~',
      },
      {
        key: '3',
        label: 'Big long legs',
      },
      {
        Key: '4',
        Label: 'Big long legs',
      },
      {
        Key: '5',
        Label: 'Haina Baichuan',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: 'Zhejiang Province',
        key: '330000',
      },
      city: {
        label: 'Hangzhou',
        key: '330100',
      },
    },
    address: 'No. 77 Gonggong Road, Xihu District',
    phone: '0752-268888888',
  },
  // GET POST Can be omitted
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;

    if (password === 'ant.design' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    if (password === 'ant.design' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req, res) => {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
  },
  'GET /api/500': (req, res) => {
    res.status(500)
      .send({
        timestamp: 1513932555104,
        status: 500,
        error: 'error',
        message: 'error',
        path: '/base/category/list',
      });
  },
  'GET /api/404': (req, res) => {
    res.status(404)
      .send({
        timestamp: 1513932643431,
        status: 404,
        error: 'Not Found',
        message: 'No message available',
        path: '/base/category/list/2121212',
      });
  },
  'GET /api/403': (req, res) => {
    res.status(403)
      .send({
        timestamp: 1513932555104,
        status: 403,
        error: 'Unauthorized',
        message: 'Unauthorized',
        path: '/base/category/list',
      });
  },
  'GET /api/401': (req, res) => {
    res.status(401)
      .send({
        timestamp: 1513932555104,
        status: 401,
        error: 'Unauthorized',
        message: 'Unauthorized',
        path: '/base/category/list',
      });
  },
  'GET  /api/login/captcha': getFakeCaptcha,
};
