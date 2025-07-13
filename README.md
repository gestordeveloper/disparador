# 📣 Campaings API – Documentação das Rotas

API RESTful para gerenciamento de campanhas, listas de contatos e envio de mensagens.

---

## 🔗 Endpoints

### 🔹 Campaings

#### `GET /api/campaings`

Retorna todas as campanhas cadastradas.

**Resposta:**

```json
[
  {
    "id": 1,
    "company_id": 1,
    "list_id": 2,
    "name": "Campanha de Teste",
    "content": "Mensagem principal",
    "content2": "Mensagem secundária",
    "content3": "Mensagem complementar",
    "type_media": 1,
    "href": "https://meusite.com",
    "due_at": "2025-07-15",
    "hour_at": "14:00:00",
    "status": "waiting",
    "send_at": null,
    "created_at": "2025-07-12T12:00:00.000Z",
    "updated_at": "2025-07-12T12:00:00.000Z"
  }
]
```

---

#### `POST /api/campaings`

Cria uma nova campanha.

**Body:**

```json
{
  "company_id": 1,
  "list_id": 2,
  "name": "Campanha de Teste",
  "content": "Mensagem 1",
  "content2": "Mensagem 2",
  "content3": "Mensagem 3",
  "type_media": 1,
  "href": "https://exemplo.com",
  "due_at": "2025-07-15",
  "hour_at": "14:00:00",
  "status": "waiting"
}
```

**Resposta:**

```json
{
  "id": 1
}
```

---

### 🔹 Lists

#### `GET /api/lists`

Retorna todas as listas de contatos.

**Resposta:**

```json
[
  {
    "id": 1,
    "company_id": 1,
    "name": "Lista VIP",
    "created_at": "2025-07-12T12:00:00.000Z",
    "updated_at": "2025-07-12T12:00:00.000Z"
  }
]
```

---

#### `POST /api/lists`

Cria uma nova lista de contatos.

**Body:**

```json
{
  "company_id": 1,
  "name": "Lista Black Friday"
}
```

**Resposta:**

```json
{
  "id": 2
}
```

---

### 🔹 Contacts

#### `GET /api/contacts/:list_id`

Retorna todos os contatos de uma lista específica.

**Exemplo:** `GET /api/contacts/1`

**Resposta:**

```json
[
  {
    "id": 1,
    "list_id": 1,
    "name": "João Silva",
    "phone": "11988887777",
    "email": "joao@email.com",
    "website": "https://sitejoao.com",
    "created_at": "2025-07-12T12:00:00.000Z",
    "updated_at": "2025-07-12T12:00:00.000Z"
  }
]
```

---

#### `POST /api/contacts`

Adiciona um novo contato a uma lista.

**Body:**

```json
{
  "list_id": 1,
  "name": "Maria Oliveira",
  "phone": "11999998888",
  "email": "maria@email.com",
  "website": "https://site.com"
}
```

**Resposta:**

```json
{
  "id": 2
}
```

---

## 📝 Status dos Campos

### `type_media`

- `1` – Texto
- `2` – Imagem

### `status`

- `waiting` – Aguardando envio
- `running` – Em execução
- `stoped` – Pausada

---

## ✅ Formatos Aceitos

- Datas (`due_at`): `YYYY-MM-DD`
- Horários (`hour_at`): `HH:mm:ss`

