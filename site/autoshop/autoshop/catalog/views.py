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