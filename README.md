
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

как передавать children. 
```
  <app-post
    *ngFor="let p of posts"
    [post]="p"
  >
    //Нужно между открывающимся и закрывающимся тегом что-то засунуть
    <small *ngIf="p.text.length > 10; else short">Пост длинный</small>

    <ng-template #short>
      <small>
        Пост короткий
      </small>
    </ng-template>
  </app-post>


// post-component получить это через *ng-content*
  <ng-content></ng-content>
```

Как передать какой-то результат родителю:
```
  //в ребенко создать eventEmmiter
  @Output() createdPost: EventEmitter<Post> = new EventEmitter();
   
  передать значение с помощью функции emit
  this.createdPost.emit(post);

  //в родительском компоненте вызвать передать параметры с помощью $event
  <app-post-form
    (createdPost)="updatePosts($event)"
  ></app-post-form>
```
