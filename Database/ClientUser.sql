CREATE TABLE `client_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `position` varchar(45) DEFAULT NULL,
  `id_clientRole` int NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `idSite` int DEFAULT NULL,
  `companyId` char(8) NOT NULL,
  PRIMARY KEY (`idclient_user`),
  KEY `idSite_idx` (`idSite`),
  KEY `id_clientRole_idx` (`id_clientRole`),
  CONSTRAINT `id_clientRole` FOREIGN KEY (`id_clientRole`) REFERENCES `client_roles` (`idclient_roles`),
  CONSTRAINT `idSite` FOREIGN KEY (`idSite`) REFERENCES `site` (`idsite`)
) ;

ALTER TABLE bsadmin.client_user ADD status BOOL NOT NULL;
ALTER TABLE bsadmin.client_user ADD idSite INT NOT NULL;
ALTER TABLE bsadmin.client_user ADD CONSTRAINT client_user_FK_1 FOREIGN KEY (idSite) REFERENCES bsadmin.site(idsite);

