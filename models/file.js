var moment = require('moment');


module.exports = (sequelize, DataTypes) => {
  file = sequelize.define('file',
	    	{
		id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		filename: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mime: {
			type: DataTypes.STRING,
			allowNull: false
		},
		path: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ref_id:  {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ref_table:  {
			type: DataTypes.STRING,
			allowNull: false
		}
	
	}, {
    tableName: 'file',
    freezeTableName: true,
  });

  file.associate = function (db) {
	db.file.belongsTo(db.user, {
          onDelete: "CASCADE",
          foreignKey: 'ref_id'
        });
  }

  file.getContractTemplates = function(){
	return this.findAll({
		where: {
			ref_table: "template_contract"
		}
	});	
  };

  file.getUserTemplates = function(){
	return this.findAll({
		where: {
			ref_table: "template_user"
		}
	});	
  };

  file.getFilesFor = function (ref_table, ref_id) {
  	return this.findAll({
  		where: {
  			ref_table: ref_table,
  			ref_id: ref_id
  		}
  	});
  }


  return file;
};
