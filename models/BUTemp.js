/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BUTemp', {
		EmpNo: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		EmpName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BUName: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'BUTemp',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};
