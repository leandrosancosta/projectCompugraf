namespace Service.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PeopleUpdate : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.People", "ZIPCode", c => c.String(nullable: false, unicode: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.People", "ZIPCode", c => c.String(nullable: false, maxLength: 8, storeType: "nvarchar"));
        }
    }
}
