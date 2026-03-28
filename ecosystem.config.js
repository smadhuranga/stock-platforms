module.exports = {
  apps : [{
    name   : "config-server",
    script : "java -jar ./config-server/target/config-server-0.0.1-SNAPSHOT.jar",
    out_file: "./logs/config-server.log",
    error_file: "./logs/config-server-error.log",
    merge_logs: true
  },
  {
    name   : "service-registry",
    script : "java -jar ./service-registry/target/eureka-server-0.0.1-SNAPSHOT.jar",
    out_file: "./logs/service-registry.log",
    error_file: "./logs/service-registry-error.log",
    merge_logs: true
  },
  {
    name   : "api-gateway",
    script : "java -jar ./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
    out_file: "./logs/api-gateway.log",
    error_file: "./logs/api-gateway-error.log",
    merge_logs: true
  }]
}
