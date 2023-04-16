migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("234sroc9jxflbdw");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "234sroc9jxflbdw",
    "created": "2023-04-16 03:40:17.447Z",
    "updated": "2023-04-16 03:41:21.250Z",
    "name": "ok",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iida75d8",
        "name": "diled",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "qbagfjde",
        "name": "piled",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
