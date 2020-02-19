import databaseConfig from '../ormconfig.json'

if (databaseConfig.password) {
  throw new Error('数据库密码未删除')
}