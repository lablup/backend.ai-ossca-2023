"""add_startsat_field_into_kernels

Revision ID: da24ff520049
Revises: 529113b08c2c
Create Date: 2020-06-18 20:47:22.152831

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "da24ff520049"
down_revision = "529113b08c2c"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("kernels", sa.Column("starts_at", sa.DateTime(timezone=True), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("kernels", "starts_at")
    # ### end Alembic commands ###
