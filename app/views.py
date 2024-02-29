from django.shortcuts import render
from .models import Aluno
from django.contrib.auth.models import User

#auth
def criar_usuario(request):
    username =  request.POST.get('username')
    email = request.POST.get('email')
    senha = request.POST.get('passworld')

    User.objects.get(username=username).first()

    if user:
        return HttpResponse('Já existe um usuario com esse nome.').first()

    user = User.objects.create_user(username=username,email=email,password=senha)
    user.save()

    return HttpResponse('Usuário Cadastrado!')

#login
def login(request):
    email = request.POST.get('email')
    senha = request.POST.get('passworld')

    user = authenticate(email=email, password=senha)

    if user:
        login(request,user)
        return HttpResponse('Autenticado!')
    else:
        return HttpResponse('Email ou senha inválido!')


#cadastro
def criar_aluno(request):
    novo_aluno = Aluno()
    request.POST.get('nome')
    request.POST.get('idade')
    request.POST.get('ano')
    request.POST.get('turma')

#home
def home(request):
    return render(request, 'pages/home.html')

def alunos(request):
    return render(request, 'pages/alunos.html')

def disciplinas(request):
    return render(request, 'pages/disciplinas.html')

def calendario_academico(request):
    return render(request, 'pages/calendario_academico.html')

def perfil(request):
    return render(request, 'pages/perfil.html')

def cadastro(request):
    return render(request, 'pages/cadastrar_alunos.html')

#Alunos

def alunos_notas(request):
    return render(request, 'pages/alunos/notas.html')

def alunos_desempenho(request):
    return render(request, 'pages/alunos/desempenho.html')

def alunos_frequencia(request):
    return render(request, 'pages/alunos/frequencia.html')

def alunos_avaliacao(request):
    return render(request, 'pages/alunos/avaliacao.html')

def alunos_lista(request):
    return render(request, 'pages/alunos/lista.html')