from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework import generics
from rest_framework.response import Response

from .models import Question, Choice
from .serializers import QuestionSerializer, ChoiceSerializer


class QuestionViewSet(ReadOnlyModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class VoteView(generics.CreateAPIView):
    serializer_class = ChoiceSerializer
    def post(self, request, choice_id, *args, **kwargs):
        obj = generics.get_object_or_404(
            queryset=Choice.objects.all(),
            id=choice_id,
        )
        obj.votes += 1
        obj.save()
        s = ChoiceSerializer(instance=obj)
        return Response(s.data)
