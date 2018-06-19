/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USER_DEFN', {
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		UserName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Password: {
			type: "VARBINARY",
			allowNull: true
		},
		Status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		Management: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		IsActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1'
		},
		SUN_OPR: {
			type: DataTypes.STRING,
			allowNull: true
		},
		COLOR_TMPL: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		DEFAULT_COUNTRY: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AREA: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'EMEA'
		},
		DATACASH_LOGIN: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FirstName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LastName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		RoleId: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		MobileNo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EmployeeId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ProfileImage: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ManagerId: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FullName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BusinessUnitId: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ExcludeFromCosting: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'USER_DEFN',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};
