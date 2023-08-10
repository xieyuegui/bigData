function switchCityFun(idx) {
    let dataJson = null;
    // 全市
    if (idx == 0) {
        dataJson = {
            // 9个总数数据-已改
            counting: [{
                num: 193840,
                title: "注册用户总数"
            }, {
                num: 285826,
                title: "累计到场人数"
            }, {
                num: 90,
                title: "开放场地总数"
            }, {
                num: 10200,
                title: "可容纳总人数"
            }, {
                num: 3780,
                title: "今日预约人数"
            }, {
                num: 76,
                title: "今日开放场地数"
            }, {
                num: 3560,
                title: "今日到场人数"
            }, {
                num: 1382,
                title: "实时在场人数"
            }, {
                num: 1022,
                title: "今日离场人数"
            }],
            // 地图数据-已改
            schoolList: [{
                    "schoolName": "莆田二中",
                    "state": 0,
                    "openPlace": "乒乓球",
                    "longitude": 119.063335,
                    "latitude": 25.350269,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 1580,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 52,
                    // 今日到场---小于预约人数
                    "todayUp": 26,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 12,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 14
                },
                {
                    "schoolName": "三江口镇中学",
                    "state": 0,
                    "openPlace": "排球场",
                    "longitude": 119.132518,
                    "latitude": 25.441175,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 3580,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 79,
                    // 今日到场---小于预约人数
                    "todayUp": 63,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 25,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 24
                }, {
                    "schoolName": "莆田第十四中学",
                    "state": 0,
                    "openPlace": "排球场",
                    "longitude": 119.103603,
                    "latitude": 25.469469,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 4122,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 23,
                    // 今日到场---小于预约人数
                    "todayUp": 18,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 15,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 13
                }, {
                    "schoolName": "白塘镇中学",
                    "state": 0,
                    "openPlace": "田径场",
                    "longitude": 119.085381,
                    "latitude": 25.439327,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 150,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2566,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 120,
                    // 今日到场---小于预约人数
                    "todayUp": 111,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 102,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 100
                }, {
                    "schoolName": "拱辰畅林小学",
                    "state": 0,
                    "openPlace": "足球",
                    "longitude": 119.031416,
                    "latitude": 25.458925,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 1967,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 28,
                    // 今日到场---小于预约人数
                    "todayUp": 6,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 3,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 3
                }, {
                    "schoolName": "莆田四中",
                    "state": 0,
                    "openPlace": "篮球场",
                    "longitude": 119.033197,
                    "latitude": 25.451954,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2399,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 86,
                    // 今日到场---小于预约人数
                    "todayUp": 75,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 70,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 70
                }, {
                    "schoolName": "莆田第二十四中学",
                    "state": 0,
                    "openPlace": "田径场",
                    "longitude": 119.018574,
                    "latitude": 25.378810,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 150,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 5000,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 116,
                    // 今日到场---小于预约人数
                    "todayUp": 89,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 82,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 73
                }, {
                    "schoolName": "荔城区新溪小学",
                    "state": 0,
                    "openPlace": "乒乓球",
                    "longitude": 119.036013,
                    "latitude": 25.414212,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2799,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 41,
                    // 今日到场---小于预约人数
                    "todayUp": 36,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 33,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 32
                }, {
                    "schoolName": "西天尾洞湖小学",
                    "state": 0,
                    "openPlace": "足球",
                    "longitude": 119.044697,
                    "latitude": 25.471301,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 1993,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 37,
                    // 今日到场---小于预约人数
                    "todayUp": 27,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 24,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 20
                },
                {
                    "schoolName": "下黄小学",
                    "state": 0,
                    "openPlace": "健身区",
                    "longitude": 119.020531,
                    "latitude": 25.417753,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 200,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 4377,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 136,
                    // 今日到场---小于预约人数
                    "todayUp": 101,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 53,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 44
                }, {
                    "schoolName": "筱塘小学",
                    "state": 0,
                    "openPlace": "足球场",
                    "longitude": 119.002453,
                    "latitude": 25.431168,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 5800,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 79,
                    // 今日到场---小于预约人数
                    "todayUp": 70,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 68,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 68
                }, {
                    "schoolName": "顶墩实验学校",
                    "state": 0,
                    "openPlace": "健身区",
                    "longitude": 119.185387,
                    "latitude": 25.475931,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2800,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 40,
                    // 今日到场---小于预约人数
                    "todayUp": 35,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 32,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 32
                },
                {
                    "schoolName": "秀屿区教师进修学校附属第一小学",
                    "state": 0,
                    "openPlace": "篮球场",
                    "longitude": 119.104048,
                    "latitude": 25.320575,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 200,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 5698,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 189,
                    // 今日到场---小于预约人数
                    "todayUp": 170,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 93,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 93
                },
                {
                    "schoolName": "秀屿区实验中学",
                    "state": 0,
                    "openPlace": "田径场",
                    "longitude": 119.13283,
                    "latitude": 25.275849,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 4655,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 51,
                    // 今日到场---小于预约人数
                    "todayUp": 23,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 20,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 18
                },
                {
                    "schoolName": "鲤南中心小学",
                    "state": 0,
                    "openPlace": "排球场",
                    "longitude": 118.699394,
                    "latitude": 25.348021,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2033,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 36,
                    // 今日到场---小于预约人数
                    "todayUp": 20,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 20,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 20
                }, {
                    "schoolName": "园庄中学",
                    "state": 0,
                    "openPlace": "篮球场",
                    "longitude": 118.754689,
                    "latitude": 25.204271,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 150,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 3825,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 93,
                    // 今日到场---小于预约人数
                    "todayUp": 56,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 43,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 40
                }, {
                    "schoolName": "枫亭中心小学",
                    "state": 0,
                    "openPlace": "乒乓球",
                    "longitude": 118.856565,
                    "latitude": 25.240155,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 1804,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 45,
                    // 今日到场---小于预约人数
                    "todayUp": 36,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 22,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 20
                }, {
                    "schoolName": "郊尾中心小学",
                    "state": 0,
                    "openPlace": "健身区",
                    "longitude": 118.830732,
                    "latitude": 25.301328,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 200,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 4930,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 189,
                    // 今日到场---小于预约人数
                    "todayUp": 150,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 140,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 140
                },
                {
                    "schoolName": "东埔中心小学",
                    "state": 0,
                    "openPlace": "排球场",
                    "longitude": 119.05504,
                    "latitude": 25.155464,
                    "id": "1",
                    "statusText": "正常开放",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2569,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 20,
                    // 今日到场---小于预约人数
                    "todayUp": 10,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 8,
                    // 今日离场---实时在场+今日离场小于等于今日到场人数
                    "todayLeave": 8
                }, {
                    "schoolName": "莆田市第二实验小学",
                    "state": 1,
                    "openPlace": "乒乓球",
                    "longitude": 119.013913,
                    "latitude": 25.453238,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2600,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "莆田第十七中学",
                    "state": 1,
                    "openPlace": "篮球场",
                    "longitude": 119.105355,
                    "latitude": 25.459926,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 4826,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "莆田第十七中学",
                    "state": 1,
                    "openPlace": "篮球场",
                    "longitude": 119.105355,
                    "latitude": 25.459926,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 4826,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "第二实验小学",
                    "state": 1,
                    "openPlace": "排球场",
                    "longitude": 119.030878,
                    "latitude": 25.476524,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 3122,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "兴安小学",
                    "state": 1,
                    "openPlace": "足球场",
                    "longitude": 119.013081,
                    "latitude": 25.439795,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 4500,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "莆田第十中学",
                    "state": 1,
                    "openPlace": "健身区",
                    "longitude": 119.105141,
                    "latitude": 25.322914,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 5308,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "仙游一中",
                    "state": 1,
                    "openPlace": "健身区",
                    "longitude": 118.701335,
                    "latitude": 25.367213,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 150,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 2588,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "道德一中",
                    "state": 1,
                    "openPlace": "篮球场",
                    "longitude": 118.691906,
                    "latitude": 25.354384,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 3054,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }, {
                    "schoolName": "湄洲湾东埔西山小学",
                    "state": 1,
                    "openPlace": "田径场",
                    "longitude": 119.049962,
                    "latitude": 25.15099,
                    "id": "1",
                    "statusText": "临时关闭",
                    // 可容纳人数---100 150 200
                    "capacity": 100,
                    // 历史进场---1000~6000 随机
                    "historyEntry": 5320,
                    // 今日预约---小于等于容纳人数
                    "todayOrder": 0,
                    // 今日到场---小于预约人数
                    "todayUp": 0,
                    // 实时在场---小于到场人数，建议预约人数一半以下
                    "realityIn": 0,
                    // 今日离场---实施在场+今日离场小于等于今日到场人数
                    "todayLeave": 0
                }
            ],
            // 近15天预约人数-已改
            orderNum: [0, 3000, 2342, 3840, 2921, 1242, 1351, 983, 1263, 2102, 2492, 3149, 5982, 6293, 5184, 2134,
                231, 0
            ],
            // 近15天进场人数-已改
            InNum: [0, 2808, 1357, 1521, 1461, 973, 214, 314, 156, 121, 782, 1357, 2853, 8127, 13924, 6379, 1246,
                0
            ],
            // 近7天用户注册走势分析-已改
            registerNum: [398, 125, 156, 403, 649, 812, 211],
            // 近7天用户到场走势分析-已改
            arriveNum: [3498, 2525, 2198, 3303, 2649, 2212, 4091],
            // 近6月注册与到场对比分析-已改
            inTrend: [1492, 8586, 7473, 9568, 2587, 4564],
            registerTrend: [2392, 5469, 9243, 10412, 6399, 3501],
            // 场地开放类型统计-已改
            siteNum: [90, 85, 88, 15, 73, 22],
            // 注册用户画像分析-已改
            ageNum: [{
                    value: 42644,
                    name: '18岁以下',
                    itemStyle: {
                        color: '#CC91FF'
                    },
                    label: {
                        color: '#CC91FF'
                    }
                },
                {
                    value: 48460,
                    name: '18-35岁',
                    itemStyle: {
                        color: '#5DDDAE'
                    },
                    label: {
                        color: '#5DDDAE'
                    }
                },
                {
                    value: 89166,
                    name: '35-55岁',
                    itemStyle: {
                        color: '#FFF100'
                    },
                    label: {
                        color: '#FFF100'
                    }
                },
                {
                    value: 13567,
                    name: '55岁以上',
                    itemStyle: {
                        color: '#38A5F7'
                    },
                    label: {
                        color: '#38A5F7'
                    }
                },
            ],
            sexNum: [{
                    value: 109264,
                    name: '男',
                    itemStyle: {
                        color: '#30C3DA'
                    }
                },
                {
                    value: 84576,
                    name: '女',
                    itemStyle: {
                        color: '#FF7F76'
                    }
                },
            ],
            // 30天场地到场人数TOP5-已改
            model6List: [{
                    schoolName: "莆田市一中",
                    num: 4568
                },
                {
                    schoolName: "莆田擢英中学",
                    num: 4235
                },
                {
                    schoolName: "莆田市实验小学",
                    num: 3986
                },
                {
                    schoolName: " 仙游师范附属小学",
                    num: 3543
                },
                {
                    schoolName: "莆田市第二实验小学",
                    num: 3321
                }
            ],
        }
    }
    // 城厢区
    if (idx == 1) {
        dataJson = {
            // 头部9个总数数据-已改
            counting: [{
                num: 31687,
                title: "注册用户总数"
            }, {
                num: 36837,
                title: "累计到场人数"
            }, {
                num: 5,
                title: "开放场地总数"
            }, {
                num: 1203,
                title: "可容纳总人数"
            }, {
                num: 298,
                title: "今日预约人数"
            }, {
                num: 2,
                title: "今日开放场地数"
            }, {
                num: 456,
                title: "今日到场人数"
            }, {
                num: 126,
                title: "实时在场人数"
            }, {
                num: 89,
                title: "今日离场人数"
            }],
            // 地图数据-已改
            schoolList: [{
                "schoolName": "下黄小学",
                "state": 0,
                "openPlace": "健身区",
                "longitude": 119.020531,
                "latitude": 25.417753,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 200,
                // 历史进场---1000~6000 随机
                "historyEntry": 4377,
                // 今日预约---小于等于容纳人数
                "todayOrder": 136,
                // 今日到场---小于预约人数
                "todayUp": 101,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 53,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 44
            }, {
                "schoolName": "筱塘小学",
                "state": 0,
                "openPlace": "足球场",
                "longitude": 119.002453,
                "latitude": 25.431168,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 5800,
                // 今日预约---小于等于容纳人数
                "todayOrder": 79,
                // 今日到场---小于预约人数
                "todayUp": 70,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 68,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 68
            }, {
                "schoolName": "顶墩实验学校",
                "state": 0,
                "openPlace": "健身区",
                "longitude": 119.185387,
                "latitude": 25.475931,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 2800,
                // 今日预约---小于等于容纳人数
                "todayOrder": 40,
                // 今日到场---小于预约人数
                "todayUp": 35,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 32,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 32
            }, {
                "schoolName": "兴安小学",
                "state": 1,
                "openPlace": "足球场",
                "longitude": 119.013081,
                "latitude": 25.439795,
                "id": "1",
                "statusText": "临时关闭",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 4500,
                // 今日预约---小于等于容纳人数
                "todayOrder": 0,
                // 今日到场---小于预约人数
                "todayUp": 0,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 0,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 0
            }],
            // 近15天预约人数-已改
            orderNum: [0, 197, 1062, 456, 270, 301, 420, 211, 340, 186, 107, 89, 63, 111, 123, 210,
                23, 0
            ],
            // 近15天进场人数-已改
            InNum: [0, 1039, 2100, 891, 96, 377, 123, 79, 103, 217, 109, 24, 19, 20, 12, 147, 196,
                0
            ],
            // 近7天用户注册走势分析-范围：22~140-已改
            registerNum: [46, 120, 120, 25, 49, 78, 134],
            // 近7天用户到场走势分析-范围：366~699-已改
            arriveNum: [546, 369, 452, 588, 503, 498, 611],
            // 近6月注册与到场对比分析
            // 范围:399~2048-已改
            registerTrend: [399, 1289, 1720, 910, 596, 903],
            // 范围:为注册人数60%~90%随机-已改
            inTrend: [214, 902, 1479, 819, 411, 713],
            // 场地开放类型统计-已改
            siteNum: [6, 12, 9, 13, 1, 2],
            // 注册用户画像分析-已改
            ageNum: [{
                    value: 7107,
                    name: '18岁以下',
                    itemStyle: {
                        color: '#CC91FF'
                    },
                    label: {
                        color: '#CC91FF'
                    }
                },
                {
                    value: 8076,
                    name: '18-35岁',
                    itemStyle: {
                        color: '#5DDDAE'
                    },
                    label: {
                        color: '#5DDDAE'
                    }
                },
                {
                    value: 14861,
                    name: '35-55岁',
                    itemStyle: {
                        color: '#FFF100'
                    },
                    label: {
                        color: '#FFF100'
                    }
                },
                {
                    value: 2261,
                    name: '55岁以上',
                    itemStyle: {
                        color: '#38A5F7'
                    },
                    label: {
                        color: '#38A5F7'
                    }
                },
            ],
            sexNum: [{
                    value: 18210,
                    name: '男',
                    itemStyle: {
                        color: '#30C3DA'
                    }
                },
                {
                    value: 14096,
                    name: '女',
                    itemStyle: {
                        color: '#FF7F76'
                    }
                },
            ],
            // 30天场地到场人数TOP5-已改
            model6List: [{
                    schoolName: "秀屿区教师进修学校附属第一小学",
                    num: 654
                },
                {
                    schoolName: "顶墩实验学校",
                    num: 608
                },
                {
                    schoolName: "园庄中学",
                    num: 511
                },
                {
                    schoolName: " 鲤南中心小学",
                    num: 256
                },
                {
                    schoolName: "郊尾中心小学",
                    num: 98
                }
            ],
        }
    }
    // 涵江区
    if (idx == 2) {
        dataJson = {
            // 头部9个总数数据-已改
            counting: [{
                num: 28560,
                title: "注册用户总数"
            }, {
                num: 46739,
                title: "累计到场人数"
            }, {
                num: 8,
                title: "开放场地总数"
            }, {
                num: 1699,
                title: "可容纳总人数"
            }, {
                num: 621,
                title: "今日预约人数"
            }, {
                num: 6,
                title: "今日开放场地数"
            }, {
                num: 577,
                title: "今日到场人数"
            }, {
                num: 219,
                title: "实时在场人数"
            }, {
                num: 122,
                title: "今日离场人数"
            }],
            // 地图数据-已改
            schoolList: [{
                "schoolName": "莆田第十七中学",
                "state": 1,
                "openPlace": "篮球场",
                "longitude": 119.105355,
                "latitude": 25.459926,
                "id": "1",
                "statusText": "临时关闭",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 4826,
                // 今日预约---小于等于容纳人数
                "todayOrder": 0,
                // 今日到场---小于预约人数
                "todayUp": 0,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 0,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 0
            }, {
                "schoolName": "三江口镇中学",
                "state": 0,
                "openPlace": "田径场",
                "longitude": 119.132518,
                "latitude": 25.441175,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 3580,
                // 今日预约---小于等于容纳人数
                "todayOrder": 79,
                // 今日到场---小于预约人数
                "todayUp": 63,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 25,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 24
            }, {
                "schoolName": "莆田第十四中学",
                "state": 0,
                "openPlace": "排球场",
                "longitude": 119.103603,
                "latitude": 25.469469,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 4122,
                // 今日预约---小于等于容纳人数
                "todayOrder": 23,
                // 今日到场---小于预约人数
                "todayUp": 18,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 15,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 13
            }, {
                "schoolName": "白塘镇中学",
                "state": 0,
                "openPlace": "田径场",
                "longitude": 119.085381,
                "latitude": 25.439327,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 150,
                // 历史进场---1000~6000 随机
                "historyEntry": 2566,
                // 今日预约---小于等于容纳人数
                "todayOrder": 120,
                // 今日到场---小于预约人数
                "todayUp": 111,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 102,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 100
            }],
            // 近15天预约人数-已改
            orderNum: [0, 500, 633, 299, 988, 1036, 860, 306, 406, 109, 224, 160, 207, 315, 389, 519,
                33, 0
            ],
            // 近15天进场人数-已改
            InNum: [0, 432, 225, 253, 193, 103, 29, 50, 23, 18, 119, 217, 465, 1324, 2308, 1059, 206,
                0
            ],
            // 近7天用户注册走势分析-范围：22~140-已改
            registerNum: [139, 125, 56, 113, 94, 123, 139],
            // 近7天用户到场走势分析-范围：366~699-已改
            arriveNum: [389, 355, 562, 311, 369, 562, 681],
            // 近6月注册与到场对比分析
            // 范围:399~2048-已改
            registerTrend: [1932, 963, 469, 732, 1993, 2013],
            // 范围:为注册人数60%~90%随机-已改
            inTrend: [1159, 703, 323, 658, 1495, 1610],
            // 场地开放类型统计-已改
            siteNum: [12, 4, 10, 1, 9, 3],
            // 注册用户画像分析-已改
            // 注册用户画像分析：男：109264 女：84576 
            // 年龄段：18周岁 以下：42644  22% ；18-35周岁：48460  25% ；35-55周岁：89166  46%  55周岁以上：13567
            ageNum: [{
                    value: 6809,
                    name: '18岁以下',
                    itemStyle: {
                        color: '#CC91FF'
                    },
                    label: {
                        color: '#CC91FF'
                    }
                },
                {
                    value: 7802,
                    name: '18-35岁',
                    itemStyle: {
                        color: '#5DDDAE'
                    },
                    label: {
                        color: '#5DDDAE'
                    }
                },
                {
                    value: 13590,
                    name: '35-55岁',
                    itemStyle: {
                        color: '#FFF100'
                    },
                    label: {
                        color: '#FFF100'
                    }
                },
                {
                    value: 1900,
                    name: '55岁以上',
                    itemStyle: {
                        color: '#38A5F7'
                    },
                    label: {
                        color: '#38A5F7'
                    }
                },
            ],
            sexNum: [{
                    value: 19023,
                    name: '男',
                    itemStyle: {
                        color: '#30C3DA'
                    }
                },
                {
                    value: 13550,
                    name: '女',
                    itemStyle: {
                        color: '#FF7F76'
                    }
                },
            ],
            // 30天场地到场人数TOP5-已改
            model6List: [{
                    schoolName: "第二实验小学",
                    num: 756
                },
                {
                    schoolName: "江口中心小学",
                    num: 703
                },
                {
                    schoolName: "白塘镇中学",
                    num: 660
                },
                {
                    schoolName: " 三江口镇中学",
                    num: 578
                },
                {
                    schoolName: "莆田第十四中学",
                    num: 552
                }
            ],
        }
    }
    // 荔城区
    if (idx == 3) {
        dataJson = {
            // 头部9个总数数据-已改
            counting: [{
                num: 31456,
                title: "注册用户总数"
            }, {
                num: 46973,
                title: "累计到场人数"
            }, {
                num: 15,
                title: "开放场地总数"
            }, {
                num: 1699,
                title: "可容纳总人数"
            }, {
                num: 628,
                title: "今日预约人数"
            }, {
                num: 11,
                title: "今日开放场地数"
            }, {
                num: 590,
                title: "今日到场人数"
            }, {
                num: 223,
                title: "实时在场人数"
            }, {
                num: 159,
                title: "今日离场人数"
            }],
            // 地图数据-已改
            schoolList: [{
                "schoolName": "拱辰畅林小学",
                "state": 0,
                "openPlace": "足球",
                "longitude": 119.031416,
                "latitude": 25.458925,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 1967,
                // 今日预约---小于等于容纳人数
                "todayOrder": 28,
                // 今日到场---小于预约人数
                "todayUp": 6,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 3,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 3
            }, {
                "schoolName": "莆田四中",
                "state": 0,
                "openPlace": "篮球场",
                "longitude": 119.033197,
                "latitude": 25.451954,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 2399,
                // 今日预约---小于等于容纳人数
                "todayOrder": 86,
                // 今日到场---小于预约人数
                "todayUp": 75,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 70,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 70
            }, {
                "schoolName": "莆田第二十四中学",
                "state": 0,
                "openPlace": "田径场",
                "longitude": 119.018574,
                "latitude": 25.378810,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 150,
                // 历史进场---1000~6000 随机
                "historyEntry": 5000,
                // 今日预约---小于等于容纳人数
                "todayOrder": 116,
                // 今日到场---小于预约人数
                "todayUp": 89,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 82,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 73
            }, {
                "schoolName": "荔城区新溪小学",
                "state": 0,
                "openPlace": "乒乓球",
                "longitude": 119.036013,
                "latitude": 25.414212,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 2799,
                // 今日预约---小于等于容纳人数
                "todayOrder": 41,
                // 今日到场---小于预约人数
                "todayUp": 36,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 33,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 32
            }, {
                "schoolName": "西天尾洞湖小学",
                "state": 0,
                "openPlace": "足球",
                "longitude": 119.044697,
                "latitude": 25.471301,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 1993,
                // 今日预约---小于等于容纳人数
                "todayOrder": 37,
                // 今日到场---小于预约人数
                "todayUp": 27,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 24,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 20
            }, {
                "schoolName": "第二实验小学",
                "state": 1,
                "openPlace": "排球场",
                "longitude": 119.030878,
                "latitude": 25.476524,
                "id": "1",
                "statusText": "临时关闭",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 3122,
                // 今日预约---小于等于容纳人数
                "todayOrder": 0,
                // 今日到场---小于预约人数
                "todayUp": 0,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 0,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 0
            }],
            // 近15天预约人数-已改
            orderNum: [0, 504, 996, 1036, 416, 499, 377, 635, 658, 107, 203, 163, 210, 350, 839, 345,
                36, 0
            ],
            // 近15天进场人数-已改
            InNum: [0, 468, 226, 250, 233, 162, 32, 490, 1333, 2320, 1063, 50, 21, 16, 130, 223, 208,
                0
            ],
            // 近7天用户注册走势分析-范围：22~140-已改
            registerNum: [56, 52, 105, 63, 94, 159, 107],
            // 近7天用户到场走势分析-范围：365~698-已改
            arriveNum: [598, 555, 423, 599, 365, 604, 417],
            // 近6月注册与到场对比分析
            // 范围:398~2047-已改
            registerTrend: [932, 694, 436, 1074, 2032, 1996],
            // 范围:为注册人数60%~90%随机-已改
            inTrend: [645, 610, 392, 751, 1625, 1297],
            // 场地开放类型统计-已改
            siteNum: [15, 14, 13, 2, 12, 3],
            // 注册用户画像分析-已改
            // 注册用户画像分析：男：109264 女：84576
            // 年龄段：18周岁 以下：42644  22% ；18-35周岁：48460  25% ；35-55周岁：89166  46%  55周岁以上：13567
            ageNum: [{
                    value: 6922,
                    name: '18岁以下',
                    itemStyle: {
                        color: '#CC91FF'
                    },
                    label: {
                        color: '#CC91FF'
                    }
                },
                {
                    value: 5999,
                    name: '18-35岁',
                    itemStyle: {
                        color: '#5DDDAE'
                    },
                    label: {
                        color: '#5DDDAE'
                    }
                },
                {
                    value: 13459,
                    name: '35-55岁',
                    itemStyle: {
                        color: '#FFF100'
                    },
                    label: {
                        color: '#FFF100'
                    }
                },
                {
                    value: 2000,
                    name: '55岁以上',
                    itemStyle: {
                        color: '#38A5F7'
                    },
                    label: {
                        color: '#38A5F7'
                    }
                },
            ],
            sexNum: [{
                    value: 16800,
                    name: '男',
                    itemStyle: {
                        color: '#30C3DA'
                    }
                },
                {
                    value: 14096,
                    name: '女',
                    itemStyle: {
                        color: '#FF7F76'
                    }
                },
            ],
            // 30天场地到场人数TOP5-已改
            model6List: [{
                    schoolName: "莆田四中",
                    num: 756
                },
                {
                    schoolName: "荔城区新溪小学",
                    num: 608
                },
                {
                    schoolName: "西天尾洞湖小学",
                    num: 644
                },
                {
                    schoolName: " 拱辰畅林小学",
                    num: 568
                },
                {
                    schoolName: "莆田第二十四中学",
                    num: 493
                }
            ],
        }
    }
    // 秀屿区
    if (idx == 4) {
        dataJson = {
            // 头部9个总数数据-已改
            counting: [{
                num: 31986,
                title: "注册用户总数"
            }, {
                num: 47869,
                title: "累计到场人数"
            }, {
                num: 12,
                title: "开放场地总数"
            }, {
                num: 1800,
                title: "可容纳总人数"
            }, {
                num: 613,
                title: "今日预约人数"
            }, {
                num: 12,
                title: "今日开放场地数"
            }, {
                num: 586,
                title: "今日到场人数"
            }, {
                num: 220,
                title: "实时在场人数"
            }, {
                num: 165,
                title: "今日离场人数"
            }],
            // 地图数据-已改
            schoolList: [{
                "schoolName": "秀屿区教师进修学校附属第一小学",
                "state": 0,
                "openPlace": "篮球场",
                "longitude": 119.104048,
                "latitude": 25.320575,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 200,
                // 历史进场---1000~6000 随机
                "historyEntry": 5698,
                // 今日预约---小于等于容纳人数
                "todayOrder": 189,
                // 今日到场---小于预约人数
                "todayUp": 170,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 93,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 93
            }, {
                "schoolName": "秀屿区实验中学",
                "state": 0,
                "openPlace": "足球场",
                "longitude": 119.13283,
                "latitude": 25.275849,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 4655,
                // 今日预约---小于等于容纳人数
                "todayOrder": 51,
                // 今日到场---小于预约人数
                "todayUp": 23,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 20,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 18
            }, {
                "schoolName": "莆田第十中学",
                "state": 1,
                "openPlace": "健身区",
                "longitude": 119.105141,
                "latitude": 25.322914,
                "id": "1",
                "statusText": "临时关闭",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 5308,
                // 今日预约---小于等于容纳人数
                "todayOrder": 0,
                // 今日到场---小于预约人数
                "todayUp": 0,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 0,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 0
            }],
            // 近15天预约人数-已改
            orderNum: [0, 500, 390, 486, 640, 207, 221, 160, 208, 358, 412, 524, 998, 1011, 864, 308,
                35, 0
            ],
            // 近15天进场人数-已改
            InNum: [0, 456, 223, 475, 243, 2498, 1000, 162, 326, 50, 23, 20, 130, 220, 253, 1305, 203,
                0
            ],
            // 近7天用户注册走势分析-范围：22~140-已改
            registerNum: [89, 100, 133, 28, 109, 56, 30],
            // 近7天用户到场走势分析-范围：365~698-已改
            arriveNum: [690, 421, 528, 365, 400, 599, 370],
            // 近6月注册与到场对比分析
            // 范围:398~2047-已改
            registerTrend: [1028, 402, 2011, 1996, 899, 1993],
            // 范围:为注册人数60%~90%随机-已改
            inTrend: [616, 249, 1408, 1696, 791, 1793],
            // 场地开放类型统计-已改
            siteNum: [15, 14, 10, 5, 13, 4],
            // 注册用户画像分析-已改
            // 注册用户画像分析：男：109264 女：84576
            // 年龄段：18周岁 以下：42644  22% ；18-35周岁：48460  25% ；35-55周岁：89166  46%  55周岁以上：13567
            ageNum: [{
                    value: 7300,
                    name: '18岁以下',
                    itemStyle: {
                        color: '#CC91FF'
                    },
                    label: {
                        color: '#CC91FF'
                    }
                },
                {
                    value: 8122,
                    name: '18-35岁',
                    itemStyle: {
                        color: '#5DDDAE'
                    },
                    label: {
                        color: '#5DDDAE'
                    }
                },
                {
                    value: 15036,
                    name: '35-55岁',
                    itemStyle: {
                        color: '#FFF100'
                    },
                    label: {
                        color: '#FFF100'
                    }
                },
                {
                    value: 2401,
                    name: '55岁以上',
                    itemStyle: {
                        color: '#38A5F7'
                    },
                    label: {
                        color: '#38A5F7'
                    }
                },
            ],
            sexNum: [{
                    value: 17256,
                    name: '男',
                    itemStyle: {
                        color: '#30C3DA'
                    }
                },
                {
                    value: 15028,
                    name: '女',
                    itemStyle: {
                        color: '#FF7F76'
                    }
                },
            ],
            // 30天场地到场人数TOP5-已改
            model6List: [{
                    schoolName: "秀屿区实验中学",
                    num: 779
                },
                {
                    schoolName: "秀屿区教师进修学校附属第一小学",
                    num: 790
                },
                {
                    schoolName: "莆田第十一中学",
                    num: 677
                },
                {
                    schoolName: " 莆田第二十五中学",
                    num: 590
                },
                {
                    schoolName: "莆田第二十八中学",
                    num: 558
                }
            ],
        }
    }
    // 仙游县
    if (idx == 5) {
        dataJson = {
            // 头部9个总数数据-已改
            counting: [{
                num: 32306,
                title: "注册用户总数"
            }, {
                num: 48569,
                title: "累计到场人数"
            }, {
                num: 15,
                title: "开放场地总数"
            }, {
                num: 1725,
                title: "可容纳总人数"
            }, {
                num: 630,
                title: "今日预约人数"
            }, {
                num: 12,
                title: "今日开放场地数"
            }, {
                num: 603,
                title: "今日到场人数"
            }, {
                num: 256,
                title: "实时在场人数"
            }, {
                num: 203,
                title: "今日离场人数"
            }],
            // 地图数据-已改
            schoolList: [{
                "schoolName": "鲤南中心小学",
                "state": 0,
                "openPlace": "排球场",
                "longitude": 118.699394,
                "latitude": 25.348021,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 2033,
                // 今日预约---小于等于容纳人数
                "todayOrder": 36,
                // 今日到场---小于预约人数
                "todayUp": 20,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 20,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 20
            }, {
                "schoolName": "园庄中学",
                "state": 0,
                "openPlace": "篮球场",
                "longitude": 118.754689,
                "latitude": 25.204271,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 150,
                // 历史进场---1000~6000 随机
                "historyEntry": 3825,
                // 今日预约---小于等于容纳人数
                "todayOrder": 93,
                // 今日到场---小于预约人数
                "todayUp": 56,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 43,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 40
            }, {
                "schoolName": "枫亭中心小学",
                "state": 0,
                "openPlace": "乒乓球",
                "longitude": 118.855415,
                "latitude": 25.23962,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 1804,
                // 今日预约---小于等于容纳人数
                "todayOrder": 45,
                // 今日到场---小于预约人数
                "todayUp": 36,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 22,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 20
            }, {
                "schoolName": "郊尾中心小学",
                "state": 0,
                "openPlace": "健身区",
                "longitude": 118.830732,
                "latitude": 25.301328,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 200,
                // 历史进场---1000~6000 随机
                "historyEntry": 4930,
                // 今日预约---小于等于容纳人数
                "todayOrder": 189,
                // 今日到场---小于预约人数
                "todayUp": 150,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 140,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 140
            }, {
                "schoolName": "仙游一中",
                "state": 1,
                "openPlace": "健身区",
                "longitude": 118.701335,
                "latitude": 25.367213,
                "id": "1",
                "statusText": "临时关闭",
                // 可容纳人数---100 150 200
                "capacity": 150,
                // 历史进场---1000~6000 随机
                "historyEntry": 2588,
                // 今日预约---小于等于容纳人数
                "todayOrder": 0,
                // 今日到场---小于预约人数
                "todayUp": 0,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 0,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 0
            }, {
                "schoolName": "道德一中",
                "state": 1,
                "openPlace": "篮球场",
                "longitude": 118.691906,
                "latitude": 25.354384,
                "id": "1",
                "statusText": "临时关闭",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 3054,
                // 今日预约---小于等于容纳人数
                "todayOrder": 0,
                // 今日到场---小于预约人数
                "todayUp": 0,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 0,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 0
            }],
            // 近15天预约人数-已改
            orderNum: [0, 524, 456, 399, 640, 563, 1189, 265, 126, 210, 350, 315, 314, 645, 420, 355,
                38, 0
            ],
            // 近15天进场人数-已改
            InNum: [0, 226, 468, 250, 233, 226, 423, 52, 2566, 1000, 130, 32, 1354, 23, 130, 20, 207,
                0
            ],
            // 近7天用户注册走势分析-范围：22~139-已改
            registerNum: [109, 123, 22, 128, 94, 77, 89],
            // 近7天用户到场走势分析-范围：365~698-已改
            arriveNum: [623, 410, 512, 498, 400, 500, 608],
            // 近6月注册与到场对比分析
            // 范围:398~2047-已改
            registerTrend: [400, 1020, 2000, 1356, 578, 1088],
            // 范围:为注册人数60%~90%随机-已改
            inTrend: [276, 979, 1260, 1220, 462, 816],
            // 场地开放类型统计-已改
            siteNum: [15, 14, 20, 5, 16, 5],
            // 注册用户画像分析-已改
            // 注册用户画像分析：男：109264 女：84576
            // 年龄段：18周岁 以下：42644  22% ；18-35周岁：48460  25% ；35-55周岁：89166  46%  55周岁以上：13567
            ageNum: [{
                    value: 6809,
                    name: '18岁以下',
                    itemStyle: {
                        color: '#CC91FF'
                    },
                    label: {
                        color: '#CC91FF'
                    }
                },
                {
                    value: 7756,
                    name: '18-35岁',
                    itemStyle: {
                        color: '#5DDDAE'
                    },
                    label: {
                        color: '#5DDDAE'
                    }
                },
                {
                    value: 12063,
                    name: '35-55岁',
                    itemStyle: {
                        color: '#FFF100'
                    },
                    label: {
                        color: '#FFF100'
                    }
                },
                {
                    value: 2980,
                    name: '55岁以上',
                    itemStyle: {
                        color: '#38A5F7'
                    },
                    label: {
                        color: '#38A5F7'
                    }
                },
            ],
            sexNum: [{
                    value: 20350,
                    name: '男',
                    itemStyle: {
                        color: '#30C3DA'
                    }
                },
                {
                    value: 16000,
                    name: '女',
                    itemStyle: {
                        color: '#FF7F76'
                    }
                },
            ],
            // 30天场地到场人数TOP5-已改
            model6List: [{
                    schoolName: "鲤南中心小学",
                    num: 782
                },
                {
                    schoolName: "枫亭中心小学",
                    num: 725
                },
                {
                    schoolName: "郊尾中心小学",
                    num: 684
                },
                {
                    schoolName: " 园庄中学",
                    num: 610
                },
                {
                    schoolName: "仙游二中",
                    num: 573
                }
            ],
        }
    }
    // 湄洲湾
    if (idx == 6) {
        dataJson = {
            // 9个总数数据-已改
            counting: [{
                num: 29120,
                title: "注册用户总数"
            }, {
                num: 39486,
                title: "累计到场人数"
            }, {
                num: 6,
                title: "开放场地总数"
            }, {
                num: 1640,
                title: "可容纳总人数"
            }, {
                num: 530,
                title: "今日预约人数"
            }, {
                num: 5,
                title: "今日开放场地数"
            }, {
                num: 486,
                title: "今日到场人数"
            }, {
                num: 130,
                title: "实时在场人数"
            }, {
                num: 100,
                title: "今日离场人数"
            }],
            // 地图数据-已改
            schoolList: [{
                "schoolName": "东埔中心小学",
                "state": 0,
                "openPlace": "排球场",
                "longitude": 119.05504,
                "latitude": 25.155464,
                "id": "1",
                "statusText": "正常开放",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 2569,
                // 今日预约---小于等于容纳人数
                "todayOrder": 20,
                // 今日到场---小于预约人数
                "todayUp": 10,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 8,
                // 今日离场---实时在场+今日离场小于等于今日到场人数
                "todayLeave": 8
            }, {
                "schoolName": "湄洲湾东埔西山小学",
                "state": 1,
                "openPlace": "田径场",
                "longitude": 119.049962,
                "latitude": 25.15099,
                "id": "1",
                "statusText": "临时关闭",
                // 可容纳人数---100 150 200
                "capacity": 100,
                // 历史进场---1000~6000 随机
                "historyEntry": 5320,
                // 今日预约---小于等于容纳人数
                "todayOrder": 0,
                // 今日到场---小于预约人数
                "todayUp": 0,
                // 实时在场---小于到场人数，建议预约人数一半以下
                "realityIn": 0,
                // 今日离场---实施在场+今日离场小于等于今日到场人数
                "todayLeave": 0
            }],
            // 近15天预约人数-已改
            orderNum: [0, 420, 290, 440, 386, 109, 126, 93, 195, 274, 346, 487, 654, 742, 662, 268,
                21, 0
            ],
            // 近15天进场人数-已改
            InNum: [0, 2320, 200, 363, 890, 147, 165, 89, 36, 47, 10, 2, 59, 180, 358, 786, 200,
                0
            ],
            // 近7天用户注册走势分析22~140-已改
            registerNum: [110, 46, 78, 90, 120, 56, 70],
            // 近7天用户到场走势分析365~697-已改
            arriveNum: [377, 456, 489, 499, 520, 578, 690],
            // 近6月注册与到场对比分析
            // 488~2047-已改
            inTrend: [2000, 589, 1997, 1000, 1202, 1988],
            // 为注册人数60%~90%随机-已改
            registerTrend: [1200, 359, 1238, 640, 781, 1312],
            // 场地开放类型统计-已改
            siteNum: [5, 3, 7, 0, 2, 0],
            // 注册用户画像分析-已改
            // 注册用户画像分析：男：109264 女：84576
            // 年龄段：18周岁 以下：42644  22% ；18-35周岁：48460  25% ；35-55周岁：89166  46%  55周岁以上：13567
            ageNum: [{
                    value: 6890,
                    name: '18岁以下',
                    itemStyle: {
                        color: '#CC91FF'
                    },
                    label: {
                        color: '#CC91FF'
                    }
                },
                {
                    value: 7203,
                    name: '18-35岁',
                    itemStyle: {
                        color: '#5DDDAE'
                    },
                    label: {
                        color: '#5DDDAE'
                    }
                },
                {
                    value: 13568,
                    name: '35-55岁',
                    itemStyle: {
                        color: '#FFF100'
                    },
                    label: {
                        color: '#FFF100'
                    }
                },
                {
                    value: 1456,
                    name: '55岁以上',
                    itemStyle: {
                        color: '#38A5F7'
                    },
                    label: {
                        color: '#38A5F7'
                    }
                },
            ],
            sexNum: [{
                    value: 17256,
                    name: '男',
                    itemStyle: {
                        color: '#30C3DA'
                    }
                },
                {
                    value: 8965,
                    name: '女',
                    itemStyle: {
                        color: '#FF7F76'
                    }
                },
            ],
            // 30天场地到场人数TOP5-已改
            model6List: [{
                    schoolName: "忠门沁头小学",
                    num: 700
                },
                {
                    schoolName: "东埔中心小学",
                    num: 605
                },
                {
                    schoolName: "东埔梯吴桥台学校",
                    num: 562
                },
                {
                    schoolName: " 东埔西山小学",
                    num: 490
                },
                {
                    schoolName: "东埔中学",
                    num: 453
                }
            ],
        }
    }
    return dataJson;
}