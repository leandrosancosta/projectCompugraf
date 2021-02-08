namespace Service.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "CPF", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "CPF");
        }
    }
}
