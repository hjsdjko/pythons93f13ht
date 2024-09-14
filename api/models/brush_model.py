# coding:utf-8
import random
from datetime import datetime
from sqlalchemy import text,TIMESTAMP

from api.models.models import Base_model
from api.exts import db
from sqlalchemy.dialects.mysql import DOUBLE,LONGTEXT
# 个人信息
class xuesheng(Base_model):
    __doc__ = u'''xuesheng'''
    __tablename__ = 'xuesheng'

    __loginUser__='xuehao'


    __authTables__={}
    __authPeople__='是'
    __authSeparate__='否'
    __thumbsUp__='否'
    __intelRecom__='否'
    __browseClick__='否'
    __foreEndListAuth__='否'
    __foreEndList__='是'
    __isAdmin__='否'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    xuehao=db.Column( db.VARCHAR(255), nullable=False,unique=True,comment='学号' )
    mima=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='密码' )
    xingming=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='姓名' )
    xingbie=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='性别' )
    shouji=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='手机' )
    touxiang=db.Column( db.Text,  nullable=True, unique=False,comment='头像' )
    zhuanye=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='专业' )
    nianling=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='年龄' )

class jiaoshi(Base_model):
    __doc__ = u'''jiaoshi'''
    __tablename__ = 'jiaoshi'

    __loginUser__='jiaoshigonghao'


    __authTables__={}
    __authPeople__='是'
    __authSeparate__='否'
    __thumbsUp__='否'
    __intelRecom__='否'
    __browseClick__='否'
    __foreEndListAuth__='否'
    __foreEndList__='否'
    __isAdmin__='否'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    jiaoshigonghao=db.Column( db.VARCHAR(255), nullable=False,unique=True,comment='教师工号' )
    mima=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='密码' )
    jiaoshixingming=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='教师姓名' )
    xingbie=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='性别' )
    zhicheng=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='职称' )
    bangongdidian=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='办公地点' )
    lianxidianhua=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='联系电话' )
    touxiang=db.Column( db.Text,  nullable=True, unique=False,comment='头像' )

class ceshileibie(Base_model):
    __doc__ = u'''ceshileibie'''
    __tablename__ = 'ceshileibie'



    __authTables__={}
    __authPeople__='否'
    __authSeparate__='否'
    __thumbsUp__='否'
    __intelRecom__='否'
    __browseClick__='否'
    __foreEndListAuth__='否'
    __foreEndList__='否'
    __isAdmin__='否'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    ceshileibie=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='测试类别' )

class xinlipingce(Base_model):
    __doc__ = u'''xinlipingce'''
    __tablename__ = 'xinlipingce'



    __authTables__={'jiaoshigonghao':'jiaoshi',}
    __authPeople__='否'
    __authSeparate__='否'
    __thumbsUp__='否'
    __intelRecom__='否'
    __browseClick__='是'
    __foreEndListAuth__='否'
    __foreEndList__='是'
    __isAdmin__='否'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    ceshimingcheng=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='测试名称' )
    fengmian=db.Column( db.Text,  nullable=True, unique=False,comment='封面' )
    ceshileibie=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='测试类别' )
    cepingwenjian=db.Column( db.Text, nullable=False, unique=False,comment='测评文件' )
    fabushijian=db.Column( db.DateTime,  nullable=True, unique=False,comment='发布时间' )
    ceshixiangqing=db.Column( db.Text,  nullable=True, unique=False,comment='测试详情' )
    jiaoshigonghao=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='教师工号' )
    jiaoshixingming=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='教师姓名' )
    clicknum=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='点击次数' )
    storeupnum=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='收藏数' )

class pingcedajuan(Base_model):
    __doc__ = u'''pingcedajuan'''
    __tablename__ = 'pingcedajuan'



    __authTables__={'xuehao':'xuesheng','jiaoshigonghao':'jiaoshi',}
    __authPeople__='否'
    __authSeparate__='否'
    __thumbsUp__='否'
    __intelRecom__='否'
    __browseClick__='否'
    __foreEndListAuth__='是'
    __foreEndList__='前要登'
    __isAdmin__='否'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    ceshimingcheng=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='测试名称' )
    ceshileibie=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='测试类别' )
    datiwenjian=db.Column( db.Text, nullable=False, unique=False,comment='答题文件' )
    fengmian=db.Column( db.Text,  nullable=True, unique=False,comment='封面' )
    xuehao=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='学号' )
    xingming=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='姓名' )
    huifuneirong=db.Column( db.Text,  nullable=True, unique=False,comment='回复内容' )
    tijiaoshijian=db.Column( db.DateTime,  nullable=True, unique=False,comment='提交时间' )
    jiaoshigonghao=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='教师工号' )
    jiaoshixingming=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='教师姓名' )
    userid=db.Column( db.BigInteger,  nullable=True, unique=False,comment='用户id' )

class pingcebaogao(Base_model):
    __doc__ = u'''pingcebaogao'''
    __tablename__ = 'pingcebaogao'



    __authTables__={'jiaoshigonghao':'jiaoshi','xuehao':'xuesheng',}
    __authPeople__='否'
    __authSeparate__='否'
    __thumbsUp__='否'
    __intelRecom__='否'
    __browseClick__='否'
    __foreEndListAuth__='是'
    __foreEndList__='前要登'
    __isAdmin__='否'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    ceshimingcheng=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='测试名称' )
    ceshileibie=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='测试类别' )
    fengmian=db.Column( db.Text,  nullable=True, unique=False,comment='封面' )
    jiaoshigonghao=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='教师工号' )
    jiaoshixingming=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='教师姓名' )
    xuehao=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='学号' )
    xingming=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='姓名' )
    cepingchengji=db.Column( db.Float,default=0, nullable=False, unique=False,comment='测评成绩' )
    pingcebaogao=db.Column( db.Text, nullable=False, unique=False,comment='评测报告' )
    jiankangzhuangtai=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='健康状态' )
    jiaoshipingyu=db.Column( db.Text,  nullable=True, unique=False,comment='教师评语' )
    dengjiriqi=db.Column( db.Date,  nullable=True, unique=False,comment='登记日期' )
    userid=db.Column( db.BigInteger,  nullable=True, unique=False,comment='用户id' )

class xinliwenzhang(Base_model):
    __doc__ = u'''xinliwenzhang'''
    __tablename__ = 'xinliwenzhang'



    __authTables__={}
    __authPeople__='否'
    __authSeparate__='否'
    __thumbsUp__='是'
    __intelRecom__='是'
    __browseClick__='是'
    __foreEndListAuth__='否'
    __foreEndList__='是'
    __isAdmin__='否'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    wenzhangbiaoti=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='文章标题' )
    jianjie=db.Column( db.Text,  nullable=True, unique=False,comment='简介' )
    fengmian=db.Column( db.Text,  nullable=True, unique=False,comment='封面' )
    fabushijian=db.Column( db.DateTime,  nullable=True, unique=False,comment='发布时间' )
    wenzhangneirong=db.Column( db.Text,  nullable=True, unique=False,comment='文章内容' )
    thumbsupnum=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='赞' )
    crazilynum=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='踩' )
    clicktime=db.Column( db.DateTime,  nullable=True, unique=False,comment='最近点击时间' )
    clicknum=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='点击次数' )
    discussnum=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='评论数' )
    storeupnum=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='收藏数' )

class chatmessage(Base_model):
    __doc__ = u'''chatmessage'''
    __tablename__ = 'chatmessage'



    __authTables__={}
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    uid=db.Column( db.BigInteger, nullable=False, unique=False,comment='用户ID' )
    fid=db.Column( db.BigInteger, nullable=False, unique=False,comment='好友用户ID' )
    content=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='内容' )
    format=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='格式(1:文字，2:图片)' )
    isread=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='消息已读(0:未读，1:已读)' )

class friend(Base_model):
    __doc__ = u'''friend'''
    __tablename__ = 'friend'



    __authTables__={}
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    uid=db.Column( db.BigInteger, nullable=False, unique=False,comment='用户ID' )
    fid=db.Column( db.BigInteger, nullable=False, unique=False,comment='好友用户ID' )
    name=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='名称' )
    picture=db.Column( db.Text, nullable=False, unique=False,comment='图片' )
    role=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='角色' )
    tablename=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='表名' )
    alias=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='别名' )
    type=db.Column( db.Integer,default=0,  nullable=True, unique=False,comment='类型(0:好友申请，1:好友，2:消息)' )

class storeup(Base_model):
    __doc__ = u'''storeup'''
    __tablename__ = 'storeup'



    __authTables__={}
    __authSeparate__='是'
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    userid=db.Column( db.BigInteger, nullable=False, unique=False,comment='用户id' )
    refid=db.Column( db.BigInteger,  nullable=True, unique=False,comment='商品id' )
    tablename=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='表名' )
    name=db.Column( db.VARCHAR(255), nullable=False, unique=False,comment='名称' )
    picture=db.Column( db.Text,  nullable=True, unique=False,comment='图片' )
    type=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='类型' )
    inteltype=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='推荐类型' )
    remark=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='备注' )

class discussxinliwenzhang(Base_model):
    __doc__ = u'''discussxinliwenzhang'''
    __tablename__ = 'discussxinliwenzhang'



    __authTables__={}
    id = db.Column(db.BigInteger, primary_key=True,autoincrement=False,comment='主键')
    addtime = db.Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), server_onupdate=text('CURRENT_TIMESTAMP'))
    refid=db.Column( db.BigInteger, nullable=False, unique=False,comment='关联表id' )
    userid=db.Column( db.BigInteger, nullable=False, unique=False,comment='用户id' )
    avatarurl=db.Column( db.Text,  nullable=True, unique=False,comment='头像' )
    nickname=db.Column( db.VARCHAR(255),  nullable=True, unique=False,comment='用户名' )
    content=db.Column( db.Text, nullable=False, unique=False,comment='评论内容' )
    reply=db.Column( db.Text,  nullable=True, unique=False,comment='回复内容' )

