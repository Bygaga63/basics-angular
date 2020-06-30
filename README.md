
Вставка значение переменной
```
{{ value }}
```

Однонаправленный бандинг из ts в html
```
<img [src] = 'imgSrc'/>
```

Однонаправленный бандинг из html в ts
```
<input
    type="text"
    (input)="onInput($event)"      //$event - событие, которое можно получить
    (blur)="onBlur(myInput.value)" //получить значение инпута
    #myInput                       //типо ref 
/>
```

Если выражение в одну строчку, то можно сразу внутри html менять значение переменной
```
<button (click)="backgroundToggle = !backgroundToggle"></button>
```

Двунаправленный databinding, т.е. не надо создавать функцию onChange
```
<input [(ngModel)]="title"
       type="text"
>
```



Директивы:
[(ngModel)]  =  для двунаправленного input databinding
[ngStyle] =     для inline стилей
[ngClass] =     для классов стилей
