module.exports = function (sequelize, DataTypes){
	var sightings = sequelize.define("sightings", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Date: {
			type: DataTypes.TEXT,
			allowNull:true
		},
		City: {
			type: DataTypes.TEXT,
			allowNull: true
			},
		State: {
			type: DataTypes.TEXT,
			allowNull: true
			},
		Shape: {
			type: DataTypes.TEXT,
			allowNull: true
			},
		Duration: {
			type: DataTypes.TEXT,
			allowNull: true
			},
		Summary:{
			type: DataTypes.TEXT,
			allowNull: true
		}
	},	{			
		timestamps: false
		});
	return sightings;
};