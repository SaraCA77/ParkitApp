CREATE SCHEMA IF NOT EXISTS `parkit` DEFAULT CHARACTER SET utf8 ;
USE `parkit` ;

-- -----------------------------------------------------
-- Table `parkit`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `tipo_documento` VARCHAR(3) NOT NULL,
  `no_documento` VARCHAR(15) NOT NULL,
  `celular` VARCHAR(15) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `clave` VARCHAR(80) NOT NULL,
  `rol` VARCHAR(3) NULL,
  `estado` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`parqueaderos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`parqueaderos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_parqueadero` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(80) NOT NULL,
  `cupo_total` INT NOT NULL,
  `cupo_bicicletas` INT NULL,
  `cupo_vehiculos` INT NULL,
  `cupo_motos` INT NULL,
  `representante_legal` VARCHAR(100) NOT NULL,
  `tipo_documento` VARCHAR(3) NOT NULL,
  `no_documento` VARCHAR(15) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `clave` VARCHAR(50) NOT NULL,
  `documentos` LONGTEXT NOT NULL,
  `aprobado` TINYINT NOT NULL,
  `observaciones` LONGTEXT NULL,
  `rol` VARCHAR(3) NOT NULL,
  `foto` LONGTEXT NOT NULL,
  `horario` VARCHAR(100) NOT NULL,
  `abre` TIME NOT NULL,
  `cierra` TIME NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`administradores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `tipo_documento` VARCHAR(3) NOT NULL,
  `no_documento` VARCHAR(15) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `clave` VARCHAR(50) NOT NULL,
   `rol` VARCHAR(3) NOT NULL,
   `estado` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `parkit`.`vehiculos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`vehiculos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_vehiculo` VARCHAR(3) NOT NULL,
  `placa` VARCHAR(6) NULL,
  `color` VARCHAR(50) NOT NULL,
  `puertas` VARCHAR(50) NULL,
  `marca` VARCHAR(100) NULL,
  `modelo` VARCHAR(4) NOT NULL,
  `usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_vehiculos_usuarios1_idx` (`usuario` ASC),
  CONSTRAINT `fk_vehiculos_usuarios1`
    FOREIGN KEY (`usuario`)
    REFERENCES `parkit`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`reservas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero_reserva` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NULL,
  `fecha` DATE NOT NULL,
  `hora` DATETIME NOT NULL,
  `estado` VARCHAR(100) NOT NULL,
  `fecha_reserva` DATETIME NOT NULL,
  `usuario` INT NOT NULL,
  `parqueadero` INT NOT NULL,
  `vehiculo` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reservas_usuarios1_idx` (`usuario` ASC),
  INDEX `fk_reservas_parqueaderos1_idx` (`parqueadero` ASC),
  INDEX `fk_reservas_vehiculos1_idx` (`vehiculo` ASC),
  CONSTRAINT `fk_reservas_usuarios1`
    FOREIGN KEY (`usuario`)
    REFERENCES `parkit`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservas_parqueaderos1`
    FOREIGN KEY (`parqueadero`)
    REFERENCES `parkit`.`parqueaderos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservas_vehiculos1`
    FOREIGN KEY (`vehiculo`)
    REFERENCES `parkit`.`vehiculos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`servicios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` DATE NOT NULL,
  `hora_ingreso` TIME NOT NULL,
  `ubicacion` VARCHAR(50) NOT NULL,
  `fecha_salida` DATE NOT NULL,
  `hora_salida` TIME NOT NULL,
  `tiempo_total` VARCHAR(30) NOT NULL,
  `valor` DOUBLE NOT NULL,
  `iva` DOUBLE NOT NULL,
  `valor_total` DOUBLE NOT NULL,
  `medio_pago` VARCHAR(45) NOT NULL,
  `parqueadero` INT NOT NULL,
  `usuario` INT NOT NULL,
  `vehiculo` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_servicios_parqueaderos1_idx` (`parqueadero` ASC),
  INDEX `fk_servicios_usuarios1_idx` (`usuario` ASC),
  INDEX `fk_servicios_vehiculos1_idx` (`vehiculo` ASC),
  CONSTRAINT `fk_servicios_parqueaderos1`
    FOREIGN KEY (`parqueadero`)
    REFERENCES `parkit`.`parqueaderos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_servicios_usuarios1`
    FOREIGN KEY (`usuario`)
    REFERENCES `parkit`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_servicios_vehiculos1`
    FOREIGN KEY (`vehiculo`)
    REFERENCES `parkit`.`vehiculos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`calificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`calificacion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `calificacion` INT NOT NULL,
  `observaciones` LONGTEXT NULL,
  `fecha_hora` DATETIME NOT NULL,
  `servicio` INT NOT NULL,
  `usuario` INT NOT NULL,
  `parqueadero` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_calificacion_usuarios1_idx` (`usuario` ASC),
  INDEX `fk_calificacion_parqueaderos1_idx` (`parqueadero` ASC),
  CONSTRAINT `fk_calificacion_usuarios1`
    FOREIGN KEY (`usuario`)
    REFERENCES `parkit`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_calificacion_parqueaderos1`
    FOREIGN KEY (`parqueadero`)
    REFERENCES `parkit`.`parqueaderos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`novedades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`novedades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `novedad` LONGTEXT NOT NULL,
  `fecha_hora` DATETIME NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
  `usuario` INT NOT NULL,
  `parqueadero` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_novedades_usuarios1_idx` (`usuario` ASC),
  INDEX `fk_novedades_parqueaderos1_idx` (`parqueadero` ASC),
  CONSTRAINT `fk_novedades_usuarios1`
    FOREIGN KEY (`usuario`)
    REFERENCES `parkit`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_novedades_parqueaderos1`
    FOREIGN KEY (`parqueadero`)
    REFERENCES `parkit`.`parqueaderos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`codigos_promocionales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`codigos_promocionales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigo` VARCHAR(45) NOT NULL,
  `fecha_hora_ingreso` VARCHAR(45) NOT NULL,
  `fecha_hora_inicio` DATETIME NOT NULL,
  `fecha_hora_fin` DATETIME NOT NULL,
  `tiempo_activo` VARCHAR(45) NOT NULL,
  `observaciones` LONGTEXT NOT NULL,
  `administrador` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_codigos_promocionales_administradores1_idx` (`administrador` ASC),
  CONSTRAINT `fk_codigos_promocionales_administradores1`
    FOREIGN KEY (`administrador`)
    REFERENCES `parkit`.`administradores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`codigos_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`codigos_usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario` INT NOT NULL,
  `codigo_promocional` INT NOT NULL,
  `fecha_hora_uso` DATETIME NOT NULL,
  `fecha_hora_activacion` DATETIME NOT NULL,
  `servicio` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_codigos_usuarios_usuarios1_idx` (`usuario` ASC),
  INDEX `fk_codigos_usuarios_codigos_promocionales1_idx` (`codigo_promocional` ASC),
  CONSTRAINT `fk_codigos_usuarios_usuarios1`
    FOREIGN KEY (`usuario`)
    REFERENCES `parkit`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_codigos_usuarios_codigos_promocionales1`
    FOREIGN KEY (`codigo_promocional`)
    REFERENCES `parkit`.`codigos_promocionales` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_codigos_usuarios_servicios1`
    FOREIGN KEY (`servicio`)
    REFERENCES `parkit`.`servicios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `parkit`.`tarifas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parkit`.`tarifas` (
  `id` INT NOT NULL,
  `valor_minuto_v` DOUBLE NULL,
  `valor_minuto_m` DOUBLE NULL,
  `valor_minuto_b` DOUBLE NULL,
  `valor_dia_v` DOUBLE NULL,
  `valor_dia_m` DOUBLE NULL,
  `valor_dia_b` DOUBLE NULL,
  `parqueadero` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tarifas_parqueaderos1_idx` (`parqueadero` ASC),
  CONSTRAINT `fk_tarifas_parqueaderos1`
    FOREIGN KEY (`parqueadero`)
    REFERENCES `parkit`.`parqueaderos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

insert into usuarios (nombre,apellidos,tipo_documento,no_documento,celular,correo,clave,rol,estado)
values ('Sara','Camacho Albarracin','CC','1052415124','3108605922','saritacamachoa77@gmail.com','1234','U','ACTIVO');

insert into administradores (nombres,apellidos,tipo_documento,no_documento,correo,clave,rol,estado)
values ('Estefania','Camacho Albarracin', 'CC', '1052415124', 'sara210299@outlook.com','1234','A','ACTIVO');

insert into vehiculos (tipo_vehiculo,placa,color,puertas,marca,modelo,usuario)
values ('V','SYD043','BLANCO','4','CHEVROLET','2017',1);

create view usuarios_app (usuarios,clave,rol,estado) as select usuarios.correo,usuarios.clave,usuarios.rol, usuarios.estado from usuarios 
UNION SELECT administradores.correo,administradores.clave,administradores.rol,administradores.estado from administradores 
UNION SELECT parqueaderos.correo,parqueaderos.clave,parqueaderos.rol, parqueaderos.estado from parqueaderos; 
