from django.shortcuts import render_to_response, render
from .models import Auto, Order
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import base64
# Create your views here.

def index(request):
    return render(
        request, 'index.html'
    )

def main(request):
    return JsonResponse(list(Auto.objects.values()), safe=False)

@csrf_exempt
def order(request):
    temp_order = Order.objects.create(auto=Auto.objects.get(name=request.POST.get('name')), date=request.POST.get('date'))
    return HttpResponse("Заказ №"+str(temp_order.id)+" успешно создан!")

def statistic(request):
    stat_arrX = []
    stat_arrY = []
    for i in range(1,5):
        stat_arrX.append(Order.objects.filter(date__month="0"+str(i), date__year="2019").count())
        sum = 0
        query_set = Order.objects.filter(date__month="0"+str(i), date__year="2019")
        query_len = query_set.count()
        for j in range(query_len):
            sum += query_set[j].auto.price
        stat_arrY.append(sum)
    print(stat_arrX)
    print(stat_arrY)
    return HttpResponse("Ok")

import plotly.plotly as py
import plotly.graph_objs as go
from plotly.offline import iplot

import cufflinks
cufflinks.go_offline()

cufflinks.set_config_file(world_readable=True, theme='pearl', offline=True)

