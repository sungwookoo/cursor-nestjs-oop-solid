<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
---

# Description

## OOP

OOP(객체 지향 프로그래밍) 원칙을 준수하여 코드의 재사용성과 유지보수성을 확보

### 1. 캡슐화 (Encapsulation)

캡슐화는 객체의 상태(데이터)와 행동(메서드)을 하나의 단위로 묶고, 외부에서 직접 접근하지 못하도록 보호하는 원칙입니다.

- **적용 예시**: 
  - `InMemoryUserRepository` 클래스는 `users` 배열을 `protected`로 정의하여, 외부에서 직접 접근할 수 없도록 하고, 메서드를 통해서만 데이터를 조작할 수 있게 합니다.

### 2. 추상화 (Abstraction)

추상화는 복잡한 시스템에서 필요한 부분만을 드러내고, 불필요한 세부 사항은 숨기는 원칙입니다.

- **적용 예시**: 
  - `UserRepository` 인터페이스는 사용자 데이터 접근에 필요한 메서드만을 정의하여, 구현체가 어떤 방식으로 데이터를 처리하는지는 숨깁니다. 이를 통해 클라이언트는 인터페이스를 통해 데이터에 접근할 수 있습니다.

### 3. 상속 (Inheritance)

상속은 기존 클래스의 속성과 메서드를 새로운 클래스가 물려받는 원칙입니다. 이를 통해 코드의 재사용성을 높일 수 있습니다.

- **적용 예시**: 
  - `InMemoryUserRepository`를 상속받는 `AdvancedUserRepository` 클래스는 기본적인 사용자 데이터 저장 기능을 그대로 사용하면서, 추가적인 기능(예: 사용자 이름으로 검색)을 제공합니다.

### 4. 다형성 (Polymorphism)

다형성은 동일한 인터페이스를 통해 서로 다른 클래스의 객체를 사용할 수 있는 능력입니다. 이를 통해 코드의 유연성을 높일 수 있습니다.

- **적용 예시**: 
  - `UserRepository` 인터페이스를 구현하는 여러 저장소 클래스(`InMemoryUserRepository`, `AdvancedUserRepository`)는 동일한 메서드(`findAll`, `findOne`)를 제공하므로, 클라이언트는 구체적인 구현체에 의존하지 않고 인터페이스를 통해 작업할 수 있습니다.

---
# Users: OOP, SOLID
`users` 디렉토리에 있는 코드는 OOP와 SOLID 원칙을 적용한 예시입니다.
## SOLID

SOLID 원칙을 준수하여 유지보수성과 확장성을 확보

### 1. 단일 책임 원칙 (Single Responsibility Principle - SRP)

각 클래스는 하나의 책임만을 가져야 합니다. 이 원칙은 코드의 가독성과 유지보수성을 높입니다.

- **적용 예시**: 
  - `UsersService` 클래스는 사용자 관련 비즈니스 로직만을 처리합니다.
  - `InMemoryUserRepository` 클래스는 사용자 데이터를 관리하는 책임만을 가집니다.

### 2. 개방-폐쇄 원칙 (Open/Closed Principle - OCP)

소프트웨어 개체는 확장에는 열려 있어야 하고, 수정에는 닫혀 있어야 합니다. 즉, 기존 코드를 수정하지 않고도 기능을 확장할 수 있어야 합니다.

- **적용 예시**: 
  - `UserRepository` 인터페이스를 통해 다양한 사용자 저장소 구현체를 추가할 수 있습니다. 예를 들어, `InMemoryUserRepository` 외에 다른 데이터베이스를 사용하는 저장소를 쉽게 추가할 수 있습니다.

### 3. 리스코프 치환 원칙 (Liskov Substitution Principle - LSP)

서브타입은 언제나 기반 타입으로 교체할 수 있어야 합니다. 즉, 자식 클래스는 부모 클래스의 기능을 대체할 수 있어야 합니다.

- **적용 예시**: 
  - `InMemoryUserRepository`는 `UserRepository` 인터페이스를 구현하므로, `UserRepository` 타입의 변수에 할당할 수 있습니다. 이는 다양한 저장소 구현체를 사용할 수 있게 합니다.

### 4. 인터페이스 분리 원칙 (Interface Segregation Principle - ISP)

클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 합니다. 즉, 인터페이스는 특정 클라이언트에 맞게 작게 나누어져야 합니다.

- **적용 예시**: 
  - `UserRepository` 인터페이스는 사용자 데이터 접근에 필요한 메서드만을 정의하여, 클라이언트가 필요하지 않은 메서드에 의존하지 않도록 합니다.

### 5. 의존 역전 원칙 (Dependency Inversion Principle - DIP)

고수준 모듈은 저수준 모듈에 의존해서는 안 됩니다. 둘 다 추상화에 의존해야 합니다.

- **적용 예시**: 
  - `UsersService`는 `UserRepository` 인터페이스에 의존하여, 구체적인 구현체에 의존하지 않습니다. 이는 테스트와 유지보수를 용이하게 합니다.

---

# Order vs Order2 vs Order3: 설계 비교

이 문서는 `order`, `order2`, `order3` 디렉토리의 설계 차이점을 설명합니다.

## Order (독립적인 설계)

### 특징
- **비즈니스 로직과 데이터 접근 로직의 분리**: `OrderService`는 비즈니스 로직을 담당하고, `OrderRepository`는 데이터 접근 로직을 담당합니다.
- **유지보수성**: 데이터 저장소가 변경되더라도 비즈니스 로직에 영향을 주지 않습니다.
- **확장성**: 새로운 기능을 추가하거나 기존 기능을 확장하기 용이합니다.
- **테스트 용이성**: 비즈니스 로직을 독립적으로 테스트할 수 있습니다.

### 장점
- 코드의 유지보수성과 확장성이 높습니다.
- 비즈니스 로직을 다른 컨텍스트에서 재사용하기 쉽습니다.
- 데이터 저장소의 변경이 필요할 때, 데이터 접근 로직만 수정하면 됩니다.

## Order2 (독립적이지 않은 설계)

### 특징
- **비즈니스 로직과 데이터 접근 로직의 결합**: `Order2Service`는 비즈니스 로직과 데이터 접근 로직이 결합되어 있습니다.
- **유지보수성**: 데이터 저장소가 변경되면 비즈니스 로직도 함께 수정해야 합니다.
- **확장성**: 새로운 기능을 추가하거나 기존 기능을 확장하기 어려울 수 있습니다.
- **테스트의 어려움**: 데이터베이스 상태에 따라 테스트 결과가 달라질 수 있습니다.

### 단점
- 코드의 유지보수성과 확장성이 떨어집니다.
- 비즈니스 로직을 다른 컨텍스트에서 재사용하기 어렵습니다.
- 데이터 저장소의 변경이 필요할 때, 비즈니스 로직도 함께 수정해야 합니다.

## Order3 (SRP 및 OCP 적용 설계)

### 특징
- **SRP 적용**: `Order3Service`는 비즈니스 로직만을 담당하고, `Order3Repository`는 데이터 접근 로직만을 담당합니다.
- **OCP 적용**: `Order3RepositoryInterface`를 통해 데이터 접근 로직을 추상화하여, 새로운 저장소 구현체를 추가할 때 기존 코드를 수정하지 않고도 확장할 수 있습니다.
- **유지보수성**: 각 클래스가 하나의 책임만을 가지므로, 코드의 가독성과 유지보수성이 높습니다.
- **확장성**: 인터페이스를 통해 확장 가능성을 높였습니다.

### 장점
- 코드의 유지보수성과 확장성이 매우 높습니다.
- 비즈니스 로직과 데이터 접근 로직이 명확히 분리되어 있어, 각 부분을 독립적으로 테스트하고 확장할 수 있습니다.
- 새로운 저장소 구현체를 쉽게 추가할 수 있습니다.

## 결론

- **Order**: 독립적인 설계는 코드의 유지보수성과 확장성을 높이며, 테스트를 용이하게 합니다. 이는 특히 대규모 시스템에서 중요한 설계 원칙입니다.
- **Order2**: 독립적이지 않은 설계는 코드의 복잡성을 증가시키고, 유지보수성과 확장성을 저해할 수 있습니다.
- **Order3**: SRP와 OCP를 적용하여, 코드의 유지보수성과 확장성을 극대화하였습니다. 이는 가장 권장되는 설계 방식입니다.

이 문서를 통해 세 설계의 차이점을 이해하고, 독립적인 비즈니스 규칙의 중요성을 인식할 수 있습니다.
