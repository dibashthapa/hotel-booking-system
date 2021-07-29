function seed(dbName, user, password) {
  db = db.getSiblingDB(dbName);
  db.createUser({
    user: user,
    pwd: password,
    roles: [{ role: 'readWrite', db: dbName }],
  });
  db.createCollection('roles');
  db.roles.insertMany([
    { code: 'USER', status: true, createdAt: new Date(), updatedAt: new Date() },
    { code: 'ADMIN', status: true, createdAt: new Date(), updatedAt: new Date() },
    { code: 'AGENT', status: true, createdAt: new Date(), updatedAt: new Date() },
  ]);
}

seed('hotel', 'dibash', 'password');
