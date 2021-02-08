namespace Service.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PersonTableUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "LastName", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "LastName");
        }
    }
}
