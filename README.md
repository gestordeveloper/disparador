# 📣 Campaings API

API REST para gerenciar campanhas de envio com listas de contatos.

## 🚀 Tecnologias

- Node.js + Express
- MariaDB
- Docker + Docker Compose

## 📦 Endpoints

### 📁 Campaings

- `GET /api/campaings`  
  Retorna todas as campanhas.

- `POST /api/campaings`  
  Cria uma nova campanha.
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
