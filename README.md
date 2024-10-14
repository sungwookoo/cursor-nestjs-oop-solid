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

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

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

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

