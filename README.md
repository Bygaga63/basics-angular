
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

Структурные директивы:
```
*ngIf        =    что-то типо show && <Component/>
*ngSwitch    =    switch case
*ngFor       =    для итераций
```

Пример if else: 
```
<p *ngIf="toggle; else blueP" class="red">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
  repudiandae.</p>

<ng-template #blueP>
  <p class="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, incidunt?</p>
</ng-template>
```
Пример switch case: 
```
<div [ngSwitch]="toggle">
  <p *ngSwitchCase="true" class="red">Lorem ipsum.</p>
  <p *ngSwitchCase="false" class="blue">Lorem ipsum.</p>
  <p *ngSwitchDefault >Lorem ipsum.</p>
</div>
```

Директивы:
```
[(ngModel)]  =     для двунаправленного input databinding
[ngStyle]    =     для inline стилей
[ngClass]    =     для классов стилей
```

