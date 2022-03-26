from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import json
from .models import User, Message
from django.core.exceptions import ValidationError

# Create your views here.
def message(request):
    def gen_response(code: int, data: str):
        return JsonResponse({
            'code': code,
            'data': data
        }, status=code)

    if request.method == 'GET':
        limit = request.GET.get('limit', default='100')
        offset = request.GET.get('offset', default='0')
        if not limit.isdigit():
            return gen_response(400, '{} is not a number'.format(limit))
        if not offset.isdigit():
            return gen_response(400, '{} is not a number'.format(offset))

        return gen_response(200, [
                {
                    'title': msg.title,
                    'content': msg.content,
                    'user': msg.user.name,
                    'timestamp': int(msg.pub_date.timestamp())
                }
                for msg in Message.objects.all().order_by('-pub_date')[int(offset) : int(offset) + int(limit)]
            ])

    elif request.method == 'POST':
        # 从cookie中获得user的名字，如果user不存在则新建一个
        # 如果cookie中没有user则使用"Unknown"作为默认用户名
        name = request.COOKIES['user'] if 'user' in request.COOKIES else 'Unknown'
        user = User.objects.filter(name=name).first()
        if not user:
            user = User(name = name)
            try:
                user.full_clean()
                user.save()
            except ValidationError as e:
                return gen_response(400, "Validation Error of user: {}".format(e))

        try:
            post_body=json.loads(request.body)
        except Exception as e:
            return gen_response(400,"invalid json")
      
        # 验证请求的数据格式是否符合json规范，如果不符合则返回code 400
        # -------------------------------------------------------------------------------

        try:
            title_get=post_body['title']
            content_get=post_body['content']           
        except Exception as e:
            return gen_response(400,"invalid data format")
      
        # 验证请求数据是否满足接口要求，若通过所有的验证，则将新的消息添加到数据库中
        # PS: {"title": "something", "content": "something"} title和content均有最大长度限制
        # -------------------------------------------------------------------------------
        try:
            message=Message(user=user,title=title_get,content=content_get)
            message.full_clean()
            message.save()
        except Exception as e:
            return gen_response(400,"String too long")

        # 添加成功返回code 201
        return gen_response(201, "message was sent successfully")

    else:
        return gen_response(405, 'method {} not allowed'.format(request.method))


# 一键清空留言板接口 TODO

def clearmessage(request):
    def gen_response(code: int, data: str):
        return JsonResponse({
            'code': code,
            'data': data
        }, status=code)

    if request.method=='GET':
        Message.objects.all().delete()
        return gen_response(200,"done")
    else:
        return gen_response(405, 'method {} not allowed'.format(request.method))


# 返回某个用户的所有留言 TODO

def messages_for_user(request):
    def gen_response(code: int, data: str):
        return JsonResponse({
            'code': code,
            'data': data
        }, status=code)

    if request.method=='POST':
        try:
            post_body=json.loads(request.body)
            name_get=post_body['user']
        except Exception as e:
            return gen_response(400,"Wrong format")
        message_list=[]
        query_result=Message.objects.filter(user__name=name_get)
        
        for message in query_result:
            message_list.append(message.make_json())
        if message_list==[]:
            return gen_response(400,'Message not found')
        
        message_list.sort(key=lambda m:m['timestamp'],reverse=True)

        return gen_response(200,message_list)
    else:
        return gen_response(405, 'method {} not allowed'.format(request.method))

# AVATAR 用户头像 TODO

def avatar(request):
    if request.method == 'GET':
        if 'user' in request.GET:
            # 找到头像
            # return HttpResponse(???, content_type='image/png')
            try:
                name_get = request.GET.get('user')
                user_get=User.objects.get(name=name_get)
            except Exception as e:
                return HttpResponse('User not found',status=400)

            try:
                return HttpResponse(user_get.avatar, content_type='image/png',status=200)
            except:
                return HttpResponse('Avatar not found',status=404)

        else:
            return HttpResponse('Format error',status=400)

    elif request.method == 'POST':
        try:
            name_get = request.POST['user'] 
            pic_get = request.FILES['pic']
        except Exception as e:
            return HttpResponse('Format error',status=400)
        
        try:
            user_get=User.objects.get(name=name_get)
        except:
            return HttpResponse('User not found',status=400)
        
        user_get.avatar=pic_get
        user_get.save()
        return HttpResponse('Done',status=200)

    else:
        return HttpResponse('method {} not allowd'.format(request.method), status=405)
