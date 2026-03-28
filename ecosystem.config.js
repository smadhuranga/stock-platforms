module.exports = {
  apps : [{
    name   : "config-server",
    script : "java -jar ./config-server/target/config-server-0.0.1-SNAPSHOT.jar"
  },
  {
    name   : "service-registry",
    script : "java -jar ./service-registry/target/eureka-server-0.0.1-SNAPSHOT.jar"
  },
  {
    name   : "api-gateway",
    script : "java -jar ./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar"
  }]
}
